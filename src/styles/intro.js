import { Dimensions, StyleSheet } from "react-native";
import { color } from "./color";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export const intro = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: color.white,
  },
  content: {
    paddingVertical: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: width * 0.02,
  },
});
