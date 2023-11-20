import { TouchableOpacity, Text, View, BackHandler, Alert, ToastAndroid } from "react-native";
import React, { useState } from "react";
import { transactiondetail } from "../styles/transactiondetail";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { global } from "../styles/global";
import { home } from "../styles/home";
import viewBooking from "../function/viewBooking";
import moment from "moment";
import ViewShot, { captureRef, captureScreen } from "react-native-view-shot";
import * as MediaLibrary from "expo-media-library";

const TransactionDetail = ({ route }) => {
  const [refresh, setRefresh] = useState(Math.random());
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const no_transaksi = route.params.no_transaksi;

  useFocusEffect(
    React.useCallback(() => {
      viewBooking(no_transaksi).then((res) => {
        setData(res);
      });
      const backAction = () => {
        navigation.navigate("Home");

        return true;
      };

      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );
      return () => backHandler.remove();
    }, [refresh])
  );

  const onSaveImageAsync = async () => {
    captureScreen({
      format: "jpg",
      quality: 0.8,
    }).then(
      async (uri) => {
        const permission = await MediaLibrary.requestPermissionsAsync();

        if (permission.status === "granted") {
          await MediaLibrary.saveToLibraryAsync(uri);
          ToastAndroid.show("Berhasil disimpan!", 3000);
        }
      },
      (error) => console.error("Oops, snapshot failed", error)
    );
  };
  return (
    <SafeAreaView style={[global.container, global.bgPrimary]}>
      <View style={transactiondetail.header}>
        <Text style={transactiondetail.headerTxt}>Detail Booking</Text>
      </View>
      <View style={transactiondetail.wrapper}>
        <View style={transactiondetail.body}>
          <Text style={transactiondetail.dateText}>
            {moment(data.tanggal_booking).format("dddd, DD MMMM YYYY HH:mm")}
          </Text>

          <View style={[global.formGroup, transactiondetail.formGroup]}>
            <Text>No. Transaksi</Text>
            <Text style={home.inputText}>{no_transaksi}</Text>
          </View>
          <View style={[global.formGroup, transactiondetail.formGroup]}>
            <Text>Status</Text>
            <Text style={home.inputText}>{data.status}</Text>
          </View>
          <View style={[global.formGroup, transactiondetail.formGroup]}>
            <Text>Kota Asal</Text>
            <Text style={home.inputText}>{data.asal_kota}</Text>
          </View>
          <View style={[global.formGroup, transactiondetail.formGroup]}>
            <Text>Kota Tujuan</Text>
            <Text style={home.inputText}>{data.tujuan_kota}</Text>
          </View>
          <View style={[global.formGroup, transactiondetail.formGroup]}>
            <Text>Tanggal Penjemputan</Text>
            <Text style={home.inputText}>
              {moment(data.tanggal).format("DD MMMM YYYY")}
            </Text>
          </View>
          <View style={[global.formGroup, transactiondetail.formGroup]}>
            <Text>Waktu Penjemputan</Text>
            <Text style={home.inputText}>{data.pukul}</Text>
          </View>
          {data.merk != "" && (
            <View style={[global.formGroup, transactiondetail.formGroup]}>
              <Text>Jenis Kendaraan</Text>
              <Text style={home.inputText}>{data.merk}</Text>
            </View>
          )}
          <View style={transactiondetail.circleBottomLeft}></View>
          <View style={transactiondetail.circleBottomRight}></View>
        </View>
        <View style={transactiondetail.footer}>
          <View style={transactiondetail.footerWrapper}>
            <Text>Rincian Biaya</Text>
            <Text style={home.inputText}>Rp. {data.harga}</Text>
          </View>
          <View style={transactiondetail.circleTopLeft}></View>
          <View style={transactiondetail.circleTopRight}></View>
        </View>
      </View>
      <View style={transactiondetail.btnWrapper}>
        <TouchableOpacity
          style={transactiondetail.btn}
          onPress={onSaveImageAsync}
        >
          <Text style={transactiondetail.btnText}>Simpan detail booking</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TransactionDetail;
