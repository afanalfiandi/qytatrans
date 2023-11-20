import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View>
      <Image source={require("../../assets/img/app-logo-sm.png")} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
