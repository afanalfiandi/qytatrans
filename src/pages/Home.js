import {
  StyleSheet,
  Text,
  TouchableOpacity,
  PermissionsAndroid,
  TextInput,
  Modal,
  View,
  Image,
  ScrollView,
  Dimensions,
  FlatList,
  Alert,
  BackHandler,
} from "react-native";
import React, { useState } from "react";
import Tab from "../component/Tab";
import { SafeAreaView } from "react-native-safe-area-context";
import { global } from "../styles/global";
import { home } from "../styles/home";
import BtnBlock from "../component/BtnBlock";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";
import { RadioButton } from "react-native-paper";
import "moment/locale/id";

import Sheet from "../component/Sheet";
import moment from "moment/moment";
import getPosition from "../function/getPosition";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import getRute from "../function/getRute";
import getEarliest from "../function/getEarliest";
import getUser from "../function/getUser";
const Home = () => {
  const [refresh, setRefresh] = useState(Math.random());
  const [load, setLoad] = useState(false);
  const [picker, setPicker] = useState(false);
  const [routeModal, setRouteModal] = useState(false);
  const [petaModal, setPetaModal] = useState(false);
  const navigation = useNavigation();
  const [mapSection, setMapSection] = useState(false);
  const [initialRegion, setInitialRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
  });
  const [userData, setUserData] = useState([]);
  const [dataRoute, setDataRoute] = useState([]);

  const [rute, setrute] = useState([]);
  const [ruteLabel, setruteLabel] = useState([]);
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const onSubmit = () => {
    setLoad(true);
    setTimeout(() => {
      navigation.navigate("Transaction", {
        id_rute: rute,
        tanggal: date,
        label: ruteLabel,
      });
      setLoad(false);
    }, 3000);
  };

  const onDatePicker = () => {
    setPicker(true);
  };

  const RenderRoute = ({ label, value, keterangan }) => {
    return (
      <View style={[global.dFlex, home.radioContainer]}>
        <RadioButton
          value={value}
          status={rute === value ? "checked" : "unchecked"}
          onPress={() => {
            setrute(value);
            setruteLabel(label);
            setRouteModal(false);
          }}
        />
        <Text>{label}</Text>
      </View>
    );
  };
  useFocusEffect(
    React.useCallback(() => {
      getPosition().then((result) => {
        setInitialRegion(result);
        setMapSection(true);
        console.log(result);
      });

      getRute().then((result) => {
        setDataRoute(result);
        setrute(result[0].id_rute);
        setruteLabel(result[0].rute);
      });

      getUser().then((result) => {
        setUserData(result);
      });
      const backAction = () => {
        Alert.alert("", "Apakah Anda yakin ingin keluar dari aplikasi?", [
          {
            text: "Batal",
            onPress: () => null,
            style: "cancel",
          },
          { text: "Keluar", onPress: () => BackHandler.exitApp() },
        ]);
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );
      return () => backHandler.remove();
    }, [refresh])
  );

  return (
    <SafeAreaView style={global.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={routeModal}
        onRequestClose={() => {
          setRouteModal(false);
        }}
      >
        <View style={home.routeModal}>
          <View style={home.routeModalView}>
            <FlatList
              data={dataRoute}
              keyExtractor={(item, index) => {
                return index;
              }}
              renderItem={({ item }) => {
                return (
                  <RenderRoute
                    label={item.rute}
                    value={item.id_rute}
                    keterangan={item.keterangan}
                  />
                );
              }}
            />
          </View>
        </View>
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={petaModal}
        onRequestClose={() => {
          setPetaModal(false);
        }}
      >
        <View style={home.petaModal}>
          <MapView
            provider={PROVIDER_GOOGLE}
            initialRegion={initialRegion}
            style={{ flex: 1 }}
            showsUserLocation={true}
            showsMyLocationButton={true}
          ></MapView>
        </View>
      </Modal>
      {picker && (
        <View style={home.datePickerContainer}>
          <DatePicker
            onSelectedChange={(date) => {
              const newDate = date.replace("/", "-");
              const newDate2 = newDate.replace("/", "-");
              const convDate = moment(newDate2).format("DD MMMM YYYY");
              setDate(newDate2);
              setPicker(false);
            }}
            mode="calendar"
            options={home.datePickerOpt}
            style={home.datePicker}
          />
        </View>
      )}

      <View style={home.header}>
        <Text style={global.text}>Hi, {userData.nama}</Text>
        <Text style={home.headerText}>Kemana Anda hari ini?</Text>
      </View>
      <View style={home.form}>
        <View style={home.inputContainer}>
          <View style={home.formGroup}>
            <Text style={home.labelInput}>Pilih rute</Text>
            <TouchableOpacity
              style={home.input}
              onPress={() => {
                setRouteModal(true);
              }}
            >
              <Text style={home.inputText}>{ruteLabel}</Text>
            </TouchableOpacity>
          </View>
          <View style={home.formGroup}>
            <Text style={home.labelInput}>Tanggal</Text>
            <TouchableOpacity style={home.input} onPress={onDatePicker}>
              <Text style={home.inputText}>
                {moment(date).format("DD MMMM YYYY")}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={[home.formGroup]}>
            <BtnBlock text={"cari"} onPress={onSubmit} loading={load} />
          </View>
        </View>
      </View>

      <View style={home.mapSection}>
        <View style={[global.dFlex, global.spaceBetween]}>
          <Text style={home.sectionTitle}>Lokasi Anda</Text>
          <TouchableOpacity
            onPress={() => {
              setPetaModal(true);
            }}
          >
            <Text style={global.primaryText}>Lihat Peta</Text>
          </TouchableOpacity>
        </View>
        {mapSection && (
          <View style={home.mapContainer}>
            <MapView
              provider={PROVIDER_GOOGLE}
              initialRegion={initialRegion}
              style={home.map}
              showsUserLocation={true}
              showsMyLocationButton={true}
            ></MapView>
          </View>
        )}
      </View>
      <Sheet />
      <Tab />
    </SafeAreaView>
  );
};

export default Home;
