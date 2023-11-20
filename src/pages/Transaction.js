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
  Alert,
  FlatList,
  ToastAndroid,
} from "react-native";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Tab from "../component/Tab";
import { SafeAreaView } from "react-native-safe-area-context";
import { global } from "../styles/global";
import { home } from "../styles/home";
import BtnBlock from "../component/BtnBlock";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";
import { RadioButton } from "react-native-paper";
import "moment/locale/id";
import { Checkbox } from "react-native-paper";

import moment from "moment/moment";
import getPosition from "../function/getPosition";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import getRute from "../function/getRute";
import getJadwal from "../function/getJadwal";
import getKendaraan from "../function/getKendaraan";
import getHarga from "../function/getHarga";
import onBooking from "../function/onBooking";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Transaction = ({ route }) => {
  const [dataKendaraan, setDataKendaraan] = useState([]);

  const [refresh, setRefresh] = useState(Math.random());
  const [load, setLoad] = useState(false);
  const [picker, setPicker] = useState(false);
  const [timePicker, setTimePicker] = useState(false);
  const [routeModal, setRouteModal] = useState(false);
  const [mapModal, setMapModal] = useState(false);
  const navigation = useNavigation();
  const [initialRegion, setInitialRegion] = useState({
    latitude: -7.1212223,
    longitude: 109.3003,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  });
  const [dataRoute, setDataRoute] = useState([]);
  const [dataJadwal, setDataJadwal] = useState([]);
  const [harga, setHarga] = useState([]);

  const [rute, setrute] = useState([]);
  const [ruteLabel, setruteLabel] = useState([]);
  const [date, setDate] = useState();
  const [jadwal, setJadwal] = useState();
  const [kendaraan, setKendaraan] = useState("");

  const onSubmit = async () => {
    const id_penumpang = await AsyncStorage.getItem("id_penumpang");
    setLoad(true);
    setTimeout(() => {
      onBooking(
        id_penumpang,
        rute,
        date,
        jadwal,
        kendaraan,
        initialRegion.latitude,
        initialRegion.longitude
      ).then((res) => {
        if (res.status == 0) {
          ToastAndroid.show("Booking berhasil", 3000);
          navigation.navigate("TransactionDetail", {
            no_transaksi: res.no_transaksi,
          });
        } else {
          ToastAndroid.show("Booking gagal", 3000);
        }
        setLoad(false);
      });
    }, 3000);
  };

  const onDatePicker = () => {
    setPicker(true);
  };
  const onTimePicker = () => {
    setTimePicker(true);
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
            getKendaraan(value).then((res) => {
              setDataKendaraan(res);
              setKendaraan("");
            });
            getJadwal(value).then((res) => {
              setDataJadwal(res);
              setJadwal(res[0].pukul);
            });
            getHarga(value).then((resp) => {
              setHarga(resp.harga);
            });
          }}
        />
        <Text>{label}</Text>
      </View>
    );
  };

  const RenderKendaraan = ({
    id_rute_kendaraan_detail,
    merk,
    id_kendaraan,
    id_rute,
  }) => {
    return (
      <View>
        <View style={home.itemContainer}>
          <View style={[global.dFlex, { alignItems: "center" }]}>
            <Checkbox
              status={kendaraan == id_kendaraan ? "checked" : "unchecked"}
              onPress={() => {
                setKendaraan(id_kendaraan);
              }}
            />
            <Text style={[home.routeText, { textTransform: "uppercase" }]}>
              {merk}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const RenderJadwal = ({ id_rute_jadwal_detail, id_rute, pukul }) => {
    return (
      <View style={[global.dFlex, global.spaceBetween, home.timeCheckbox]}>
        <Checkbox
          status={jadwal == pukul ? "checked" : "unchecked"}
          onPress={() => {
            setJadwal(pukul);
            setTimePicker(false);
          }}
        />
        <Text>{pukul}</Text>
      </View>
    );
  };
  useFocusEffect(
    React.useCallback(() => {
      getPosition().then((result) => {
        setInitialRegion(result);
      });

      getRute().then((result) => {
        setDataRoute(result);
        setrute(route.params.id_rute);
        setruteLabel(route.params.label);
        setDate(route.params.tanggal);
      });

      getJadwal(route.params.id_rute).then((res) => {
        setDataJadwal(res);
        setJadwal(res[0].pukul);
      });
      getKendaraan(route.params.id_rute).then((res) => {
        setDataKendaraan(res);
        getHarga(route.params.id_rute).then((resp) => {
          setHarga(resp.harga);
        });
      });
    }, [refresh])
  );

  const onRegionChangeComplete = (region) => {
    setInitialRegion({
      latitude: region.latitude,
      longitude: region.longitude,
      latitudeDelta: 0.001,
      longitudeDelta: 0.001,
    });
  };

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
        visible={mapModal}
        onRequestClose={() => {
          setMapModal(false);
        }}
      >
        <View style={home.mapModal}>
          <MapView
            provider={PROVIDER_GOOGLE}
            initialRegion={initialRegion}
            style={{
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
            onRegionChangeComplete={onRegionChangeComplete}
            showsUserLocation={true}
            showsMyLocationButton={true}
          ></MapView>
          <View style={[home.markerContainer]}>
            <Image
              source={require("../../assets/img/icon/location-lg.png")}
              style={{
                width: 30,
                height: 30,
                resizeMode: "contain",
                marginTop: -20,
              }}
            />
          </View>
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
      {timePicker && (
        <View style={home.timePickerContainer}>
          <View style={home.timeForm}>
            <FlatList
              data={dataJadwal}
              keyExtractor={(item, index) => {
                return index;
              }}
              horizontal
              renderItem={({ item }) => {
                return (
                  <RenderJadwal
                    id_rute_jadwal_detail={item.id_rute_jadwal_detail}
                    id_rute={item.id_rute}
                    pukul={item.pukul}
                  />
                );
              }}
            />
          </View>
        </View>
      )}

      <View style={home.header}>
        <Text style={home.headerText}>Booking</Text>
      </View>
      <View style={[home.form, { flex: 1 }]}>
        <ScrollView style={{ flex: 1 }}>
          <View style={home.inputContainer}>
            <View style={home.formGroup}>
              <Text style={home.labelInput}>Tujuan</Text>
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
            <View style={home.formGroup}>
              <Text style={home.labelInput}>Pukul</Text>
              <TouchableOpacity style={home.input} onPress={onTimePicker}>
                <Text style={home.inputText}>{jadwal}</Text>
              </TouchableOpacity>
            </View>
            <View style={home.formGroup}>
              <View style={home.mapSection}>
                <View style={[global.dFlex, global.spaceBetween]}>
                  <Text style={home.sectionTitle}>Lokasi Penjemputan</Text>
                  <TouchableOpacity
                    onPress={() => {
                      setMapModal(true);
                    }}
                  >
                    <Text style={global.primaryText}>Atur lokasi</Text>
                  </TouchableOpacity>
                </View>
                <View style={home.mapContainer}>
                  <MapView
                    provider={PROVIDER_GOOGLE}
                    initialRegion={initialRegion}
                    style={home.map}
                    showsUserLocation={true}
                    showsMyLocationButton={true}
                  ></MapView>
                </View>
              </View>
            </View>
            {dataKendaraan.length > 0 && (
              <View style={home.formGroup}>
                <Text style={home.labelInput}>Jenis Kendaraan</Text>

                <FlatList
                  data={dataKendaraan}
                  keyExtractor={(item, index) => {
                    return index;
                  }}
                  horizontal
                  renderItem={({ item }) => {
                    return (
                      <RenderKendaraan
                        id_rute_kendaraan_detail={item.id_rute_kendaraan_detail}
                        merk={item.merk}
                        id_kendaraan={item.id_kendaraan}
                        id_rute={item.id_rute}
                      />
                    );
                  }}
                />
              </View>
            )}
            <View style={home.formGroup}>
              <Text style={home.labelInput}>Rincian Harga</Text>
              <Text style={home.inputText}>Rp. {harga}</Text>
            </View>
            <View style={[home.formGroup]}>
              <BtnBlock text={"pesan"} onPress={onSubmit} loading={load} />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Transaction;
