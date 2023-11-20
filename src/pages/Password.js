import { StyleSheet, Text, TextInput, ToastAndroid, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { global } from "../styles/global";
import { home } from "../styles/home";
import { profile } from "../styles/profile";
import BtnBlock from "../component/BtnBlock";
import changePassword from "../function/changePassword";

const Password = () => {
  const [load, setLoad] = useState(false);

  const [lama, setLama] = useState("");
  const [baru, setBaru] = useState("");

  const onSubmit = () => {
    setLoad(true);

    setTimeout(() => {
      changePassword(lama, baru).then((res) => {
        if (res.status != 1) {
          ToastAndroid.show("Berhasil", 3000);
        } else {
          ToastAndroid.show("Gagal", 3000);
        }
      });
      setLoad(false);
    }, 3000);
  };
  return (
    <SafeAreaView style={global.container}>
      <Text style={home.headerText}>Ubah Kata Sandi</Text>

      <View style={profile.formGroup}>
        <Text style={global.inputLabel}>Kata Sandi Lama</Text>
        <TextInput
          secureTextEntry
          placeholder="Masukkan kata sandi lama Anda"
          style={global.textInput}
          value={lama}
          onChangeText={(text) => {
            setLama(text);
          }}
        />
      </View>
      <View style={profile.formGroup}>
        <Text style={global.inputLabel}>Kata Sandi Baru</Text>
        <TextInput
          secureTextEntry
          placeholder="Masukkan kata sandi baru Anda"
          style={global.textInput}
          value={baru}
          onChangeText={(text) => {
            setBaru(text);
          }}
        />
      </View>
      <View style={profile.formGroup}>
        <BtnBlock text={"simpan"} onPress={onSubmit} loading={load} />
      </View>
    </SafeAreaView>
  );
};

export default Password;

const styles = StyleSheet.create({});
