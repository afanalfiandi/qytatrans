import { Dimensions, StyleSheet } from "react-native";
import { color } from "./color";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export const tab = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    paddingVertical: 10,
    paddingHorizontal: 20,
    right: 0,
    left: 0,
    backgroundColor: color.white,
    borderTopWidth: 1,
    borderTopColor: color.light
  },
  items: {
    width: "33%",
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
