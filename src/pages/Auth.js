import {
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  View,
  ActivityIndicator,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import { global } from "../styles/global";
import { auth } from "../styles/auth";
import Header from "../component/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import Divider from "../component/Divider";
import BtnBlock from "../component/BtnBlock";
import { useNavigation } from "@react-navigation/native";
import onAuth from "../function/onAuth";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Auth = () => {
  const navigation = useNavigation();
  const [load, setLoad] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navig = () => {
    navigation.navigate("Register");
  };
  const onSubmit = () => {
    setLoad(true);

    onAuth(username, password).then((res) => {
      setTimeout(() => {
        setLoad(false);
        if (res.status == 0) {
          AsyncStorage.setItem("id_penumpang", res.id_penumpang);
          navigation.navigate("Home");
        } else {
          ToastAndroid.show("Username atau kata sandi salah", 3000);
        }
      }, 3000);
    });
  };
  return (
    <SafeAreaView style={global.container}>
      <Header />
      <View style={auth.greetingContainer}>
        <Text style={global.greetingText}>Selamat {"\n"}Datang!</Text>
        <Text style={global.text}>Silahkan masuk untuk melanjutkan</Text>
      </View>
      <View style={auth.formContainer}>
        <TextInput
          style={global.textInput}
          placeholder="Masukkan username Anda"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={global.textInput}
          secureTextEntry
          placeholder="Masukkan kata sandi Anda"
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <Divider />
      <BtnBlock text={"masuk"} onPress={onSubmit} loading={load} />

      <View style={[global.dFlex, global.center]}>
        <Text style={global.text}>Belum punya akun?</Text>
        <TouchableOpacity style={auth.link} onPress={navig}>
          <Text style={global.primaryText}>Daftar disini</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Auth;

const styles = StyleSheet.create({});
