import {
  Image,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { global } from "../styles/global";
import { profile } from "../styles/profile";
import BtnBlock from "../component/BtnBlock";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import Tab from "../component/Tab";
import Loading from "../component/Loading";
import { color } from "../styles/color";
import getUser from "../function/getUser";
import changeUser from "../function/changeUser";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Profile = () => {
  const navigation = useNavigation();
  const [load, setLoad] = useState(false);
  const [logoutLoad, setLogoutLoad] = useState(false);
  const [refresh, setRefresh] = useState(Math.random());
  const [ubah, setUbah] = useState(true);
  const [data, setData] = useState({
    alamat: "",
    email: "",
    id_penumpang: "",
    img: "",
    nama: "",
    username: "",
    whatsapp: "",
  });
  const onLogout = async () => {
    setLogoutLoad(true);

    setTimeout(async () => {
      try {
        await AsyncStorage.removeItem("id_penumpang");
        navigation.navigate("Auth");
      } catch (error) {
        console.log(error);
      }
      setLogoutLoad(false);
    }, 3000);
  };
  const onSubmit = () => {
    setLoad(true);
    setTimeout(() => {
      changeUser(
        data.nama,
        data.username,
        data.email,
        data.whatsapp,
        data.alamat
      ).then((res) => {
        if (res.status == 0) {
          getUser().then((resp) => {
            setData(resp);
          });
          ToastAndroid.show("Berhasil", 3000);
        } else {
          ToastAndroid.show("Gagal", 3000);
        }
      });
      setLoad(false);
    }, 3000);
  };

  const handleInputText = (inputName, text) => {
    setData({ ...data, [inputName]: text });
  };
  useFocusEffect(
    React.useCallback(() => {
      getUser().then((res) => {
        setData(res);
      });
    }, [refresh])
  );
  return (
    <SafeAreaView style={global.container}>
      <ScrollView
        style={{
          flex: 1,
          paddingBottom: 300,
        }}
      >
        <View style={profile.imgContainer}>
          <TouchableOpacity style={profile.imgBtn}>
            <Image
              style={profile.img}
              source={require("../../assets/img/profile.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={profile.logoutBtn} onPress={onLogout}>
            {logoutLoad && <Loading color={color.danger} />}
            {!logoutLoad && (
              <Text style={[global.inputLabel, global.dangerText]}>Keluar</Text>
            )}
          </TouchableOpacity>
        </View>
        <View
          style={[global.dFlex, global.spaceBetween, { alignItems: "center" }]}
        >
          <Text style={profile.label}>Informasi Personal</Text>
          <TouchableOpacity
            onPress={() => {
              setUbah(!ubah);
            }}
          >
            <Text>Ubah</Text>
          </TouchableOpacity>
        </View>
        <View style={profile.formGroup}>
          <Text style={global.inputLabel}>Nama Lengkap</Text>
          <TextInput
            editable={ubah ? false : true}
            style={global.textInput}
            value={data.nama}
            onChangeText={(text) => {
              handleInputText("nama", text);
            }}
          />
        </View>
        <View style={profile.formGroup}>
          <Text style={global.inputLabel}>Username</Text>
          <TextInput
            editable={ubah ? false : true}
            style={global.textInput}
            value={data.username}
            onChangeText={(text) => {
              handleInputText("username", text);
            }}
          />
        </View>
        <View style={profile.formGroup}>
          <Text style={global.inputLabel}>Email</Text>
          <TextInput
            editable={ubah ? false : true}
            style={global.textInput}
            value={data.email}
            onChangeText={(text) => {
              handleInputText("email", text);
            }}
          />
        </View>
        <View style={profile.formGroup}>
          <Text style={global.inputLabel}>Telepon</Text>
          <TextInput
            editable={ubah ? false : true}
            style={global.textInput}
            value={data.whatsapp}
            onChangeText={(text) => {
              handleInputText("whatsapp", text);
            }}
          />
        </View>
        <View style={profile.formGroup}>
          <Text style={global.inputLabel}>Alamat</Text>
          <TextInput
            editable={ubah ? false : true}
            style={global.textArea}
            value={data.alamat}
            onChangeText={(text) => {
              handleInputText("alamat", text);
            }}
          />
        </View>
        <BtnBlock
          text={"Ubah"}
          onPress={onSubmit}
          loading={load}
          disabled={ubah ? true : false}
        />
        <TouchableOpacity
          style={profile.pwLink}
          onPress={() => {
            navigation.navigate("Password");
          }}
        >
          <Text style={[global.primaryText, global.bold]}>Ubah kata sandi</Text>
        </TouchableOpacity>
        <View style={{ paddingTop: 150 }}></View>
      </ScrollView>
      <Tab />
    </SafeAreaView>
  );
};

export default Profile;
