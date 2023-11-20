import { Dimensions, StyleSheet } from "react-native";
import { color } from "./color";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export const register = StyleSheet.create({
  greetingContainer: {
    marginTop: height * 0.01,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: color.white,
  },
  formContainer: {
    marginTop: height * 0.01,
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    marginHorizontal: 5,
  },
  formGroup: {
    width: "100%",
  },
});
