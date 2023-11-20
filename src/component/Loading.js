import { StyleSheet, ActivityIndicator, Text, View } from "react-native";
import React from "react";
import { color } from "../styles/color";

const Loading = ({ color }) => {
  return (
    <ActivityIndicator size="small" style={{ marginRight: 5 }} color={color} />
  );
};

export default Loading;
