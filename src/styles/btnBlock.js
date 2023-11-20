import { Dimensions, StyleSheet } from "react-native";
import { color } from "./color";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export const btnBlock = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.primary,
    width: "100%",
    marginVertical: 10,
    paddingVertical: height * 0.0135,
    borderRadius: 6,
  },
  text: {
    color: color.white,
    textTransform: "uppercase",
    fontWeight: 'bold'
  },
});
