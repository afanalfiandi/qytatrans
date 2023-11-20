import { Dimensions, StyleSheet } from "react-native";
import { color } from "./color";
import { StatusBar } from "expo-status-bar";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export const profile = StyleSheet.create({
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  imgBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    marginBottom: 10,
    padding: 10,
  },
  img: {
    borderRadius: 100,
  },
  label: {
    color: color.primary,
    fontWeight: "bold",
    fontSize: width * 0.04,
  },
  pwLink: {
    alignItems: "center",
    justifyContent: "center",
  },
  logoutBtn: {
    position: "absolute",
    top: 0,
    right: 0,
    paddingLeft: 10,
    paddingBottom: 10,
  },
});
