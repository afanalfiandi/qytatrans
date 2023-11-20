import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { global } from "../styles/global";
import Header from "../component/Header";
import { intro } from "../styles/intro";
import BtnBlock from "../component/BtnBlock";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Intro = () => {
  const navigation = useNavigation();
  const onStart = async () => {
    try {
      await AsyncStorage.setItem("intro", "1");
      navigation.navigate("Auth");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <SafeAreaView style={global.container}>
      <Header />
      <View style={[intro.content]}>
        <Image
          style={intro.img}
          source={require("../../assets/img/slider.png")}
        />
      </View>
      <View style={[intro.content]}>
        <Text style={global.h1}>pulang, santai, bersama kami!</Text>
        <Text style={[global.text]}>
          Selamat datang di aplikasi layanan transportasi online kami. Kami siap
          membantu Anda mencapai tujuan dengan mudah dan nyaman.
        </Text>
        <View style={[global.my1, global.fullWidth]}>
          <BtnBlock onPress={onStart} text={"mulai"} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Intro;

const styles = StyleSheet.create({});
