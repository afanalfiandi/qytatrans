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
    width: 75,
    height: 75,
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
  imgModalContainer: { 
    backgroundColor: "transparent",
    flex: 1,
    alignItems: "center",
  },
  imgModalContent: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 15,
    backgroundColor: color.white,
    position: "absolute",
    bottom: 0,
    width: width * 0.95,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  imgBtnOpt: {
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  imgModalPreview: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imgLg: {
    width: width * 0.9,
    height: width * 0.9,
    resizeMode: "contain",
  },
  closeBtn: {
    padding: 15,
    position: "absolute",
    top: 0,
    right: 0,
    marginRight: 10,
  },
});
