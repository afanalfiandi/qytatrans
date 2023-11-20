import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { history } from "../../styles/history";
import { global } from "../../styles/global";
import { home } from "../../styles/home";
import Tab from "../../component/Tab";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import getRiwayat from "../../function/getRiwayat";
import moment from "moment/moment";

const Menunggu = () => {
  const navigation = useNavigation();
  const [refresh, setRefresh] = useState(Math.random());
  const [data, setData] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      getRiwayat(4).then((res) => {
        if (res.status != 1) {
          setData(res);
        }
      });
    }, [refresh])
  );
  const RenderItem = ({
    no_transaksi,
    id_penumpang,
    harga,
    nama_penumpang,
    asal_kota,
    tujuan_kota,
    status,
    tanggal,
    pukul,
    latitude,
    longitude,
  }) => {
    return (
      <TouchableOpacity
        style={history.row}
        onPress={() => {
          navigation.navigate("TransactionDetail", {
            no_transaksi: no_transaksi,
          });
        }}
      >
        <View style={[global.dFlex, global.spaceBetween, history.rowHeader]}>
          <Text>{moment(tanggal).format("DD MMMM YYYY")}</Text>
          <Image source={require("../../../assets/img/icon/play.png")} />
        </View>
        <View style={[global.dFlex, home.routeContainer, home.historyRow]}>
          <Image source={require("../../../assets/img/icon/location.png")} />
          <Text style={home.routeText}>
            {asal_kota} - {tujuan_kota}
          </Text>
        </View>
        <View style={[global.dFlex, global.spaceBetween, history.rowHeader]}>
          {/* <Text>{driver}</Text> */}
          <Text>Rp. {harga}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      {data.length > 0 && (
        <FlatList
          data={data}
          renderItem={({ item, index }) => (
            <RenderItem
              no_transaksi={item.no_transaksi}
              id_penumpang={item.id_penumpang}
              harga={item.harga}
              nama_penumpang={item.nama_penumpang}
              asal_kota={item.asal_kota}
              tujuan_kota={item.tujuan_kota}
              status={item.status}
              tanggal={item.tanggal}
              pukul={item.pukul}
              latitude={item.latitude}
              longitude={item.longitude}
            />
          )}
          keyExtractor={(item, index) => {
            return index;
          }}
        />
      )}

      {data.length <= 0 && (
        <View
          style={{
            width: "100%",
            height:
              Dimensions.get("screen").height -
              Dimensions.get("screen").height * 0.3,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Tidak ada data</Text>
        </View>
      )}
    </View>
  );
};

export default Menunggu;

const styles = StyleSheet.create({});
