import {
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  View,
  ActivityIndicator,
  ScrollView,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import { global } from "../styles/global";
import { register } from "../styles/register";
import Header from "../component/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import Divider from "../component/Divider";
import BtnBlock from "../component/BtnBlock";
import { useNavigation } from "@react-navigation/native";
import Loading from "../component/Loading";
import onRegister from "../function/onRegister";

const Register = () => {
  const navigation = useNavigation();
  const [load, setLoad] = useState(false);

  const [nama, setnama] = useState("");
  const [email, setemail] = useState("");
  const [telp, settelp] = useState("");
  const [alamat, setalamat] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  const onSubmit = () => {
    setLoad(true);

    setTimeout(() => {
      if (password == confirmpassword) {
        onRegister(nama, email, telp, alamat, username, password).then(
          (res) => {
            if (res.status == 0) {
              ToastAndroid.show("Pendaftaran akun berhasil", 3000);
              navigation.navigate("Auth");
            } else {
              ToastAndroid.show("Pendaftaran akun gagal", 3000);
            }
          }
        );
      } else {
        ToastAndroid.show("Kata sandi tidak sesuai", 3000);
      }
      setLoad(false);
    }, 3000);
  };
  return (
    <SafeAreaView style={global.container}>
      <Header />
      <ScrollView>
        <View style={[register.greetingContainer]}>
          <Text style={global.greetingText}>Pendaftaran Akun</Text>
          <Text style={global.text}>
            Silahkan isi formulir pendaftaran Anda
          </Text>
        </View>
        <View style={register.formContainer}>
          <View style={register.formGroup}>
            <Text style={global.inputLabel}>Nama Lengkap</Text>
            <TextInput
              style={global.textInput}
              placeholder="Masukkan nama lengkap Anda"
              value={nama}
              onChangeText={setnama}
            />
          </View>
          <View style={register.formGroup}>
            <Text style={global.inputLabel}>Email</Text>
            <TextInput
              style={global.textInput}
              placeholder="Masukkan email Anda"
              value={email}
              onChangeText={setemail}
            />
          </View>
          <View style={register.formGroup}>
            <Text style={global.inputLabel}>Nomor Telepon</Text>
            <TextInput
              style={global.textInput}
              placeholder="Masukkan no. telepon Anda (628xxx)"
              value={telp}
              onChangeText={settelp}
            />
          </View>
          <View style={register.formGroup}>
            <Text style={global.inputLabel}>Alamat</Text>
            <TextInput
              style={global.textArea}
              placeholder="Masukkan alamat Anda"
              value={alamat}
              onChangeText={setalamat}
            />
          </View>
          <View style={register.formGroup}>
            <Text style={global.inputLabel}>Username</Text>
            <TextInput
              style={global.textInput}
              placeholder="Masukkan username Anda"
              value={username}
              onChangeText={setusername}
            />
          </View>
          <View style={register.formGroup}>
            <Text style={global.inputLabel}>Kata Sandi</Text>
            <TextInput
              style={global.textInput}
              secureTextEntry
              placeholder="Masukkan kata sandi Anda"
              value={password}
              onChangeText={setpassword}
            />
          </View>
          <View style={register.formGroup}>
            <Text style={global.inputLabel}>Konfrmasi Ulang Kata Sandi</Text>
            <TextInput
              style={global.textInput}
              secureTextEntry
              placeholder="Konfirmasi kata sandi"
              value={confirmpassword}
              onChangeText={setconfirmpassword}
            />
          </View>
        </View>
        <BtnBlock text={"daftar"} onPress={onSubmit} loading={load} />
        <View style={[global.dFlex, global.center]}>
          <Text style={global.text}>Sudah punya akun?</Text>
          <TouchableOpacity style={register.link}>
            <Text style={global.primaryText}>Masuk</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({});
