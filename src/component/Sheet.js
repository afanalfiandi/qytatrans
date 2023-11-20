import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import { color } from "../styles/color";
import { global } from "../styles/global";
import { home } from "../styles/home";
import { useFocusEffect } from "@react-navigation/native";
import getEarliest from "../function/getEarliest";
import getIklan from "../function/getIklan";
import moment from "moment";
import { baseUrl } from "../function/baseUrl";

const Sheet = () => {
  const [ind, setInd] = useState(0);
  const bottomSheetRef = useRef(null);
  const [refresh, setRefresh] = useState(Math.random());
  const [earliest, setEarliest] = useState([]);
  const [iklan, setIklan] = useState([]);
  // variables
  const snapPoints = useMemo(() => ["99%", "100%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    setInd(index);
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      getEarliest().then((res) => {
        console.log(earliest);
        if (res.status != 1) {
          setEarliest(res);
        }
      });

      getIklan().then((res) => {
        if (res.status != 1) {
          setIklan(res);
        }
      });
    }, [refresh])
  );

  const renderItem = useCallback(
    ({ item }) => (
      <View style={home.itemContainer}>
        <View style={home.historyRow}>
          <Text>
            {moment(item.tanggal).format("DD MMMM yyyy")} - {item.pukul}
          </Text>
        </View>
        <View style={[global.dFlex, home.routeContainer, home.historyRow]}>
          <Image source={require("../../assets/img/icon/location.png")} />
          <Text style={home.routeText}>
            {item.asal_kota} - {item.tujuan_kota}
          </Text>
        </View>
        <View style={[global.dFlex, global.spaceBetween, home.historyRow]}>
          <Text>{item.nama_driver}</Text>
          <Text>Rp. {item.harga}</Text>
        </View>
      </View>
    ),
    []
  );
  const renderBanner = useCallback(
    ({ item }) => (
      <View style={home.bannerContainer}>
        <Image
          style={[home.banner, { height: "50%" }]}
          source={{ uri: baseUrl + "/uploads/iklan/" + item.img }}
        />
      </View>
    ),
    []
  );
  return (
    <GestureHandlerRootView
      style={[
        home.bottomSheetSection,
        {
          height:
            ind == 0
              ? Dimensions.get("screen").height * 0.27
              : Dimensions.get("screen").height * 0.6,
        },
      ]}
    >
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        enableOverDrag={true}
        snapPoints={snapPoints}
        enableDynamicSizing={false}
        onChange={handleSheetChanges}
        backgroundStyle={home.bottomSheet}
        handleIndicatorStyle={home.indicator}
        handleHeight={100}
      >
        <View style={home.contentContainer}>
          <Text style={home.sectionTitle}>Baru-baru Ini</Text>
          {earliest.length > 0 && (
            <FlatList
              horizontal={true}
              data={earliest}
              keyExtractor={(i, index) => index}
              renderItem={renderItem}
            />
          )}
          {earliest.length <= 0 && (
            <Text>Tidak ada data untuk ditampilkan</Text>
          )}
        </View>
        <View style={home.bannerContainer}>
          <Text style={[home.sectionTitle, { marginLeft: 20 }]}>
            Baru dari Qyta Trans
          </Text>
          {iklan.length > 0 && (
            <FlatList
              horizontal={true}
              data={iklan}
              keyExtractor={(i, index) => index}
              renderItem={renderBanner}
            />
          )}

          {iklan.length <= 0 && (
            <Text style={{ marginLeft: 20 }}>
              Tidak ada data untuk ditampilkan
            </Text>
          )}
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default Sheet;
