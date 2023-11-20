import { Dimensions, StyleSheet } from "react-native";
import { color } from "./color";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export const global = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width * 0.05,
    paddingVertical: width * 0.05,
    backgroundColor: color.white,
  },
  bgPrimary: {
    backgroundColor: color.primary,
  },
  content: {
    flex: 1,
    backgroundColor: color.dark,
  },
  h1: {
    fontSize: width * 0.055,
    textTransform: "capitalize",
    color: color.primary,
    fontWeight: "bold",
    marginVertical: 5,
  },
  text: {
    fontSize: width * 0.035,
    color: color.dark,
    marginVertical: 5,
    textAlign: "justify",
  },
  inputLabel: {
    fontSize: width * 0.035,
    color: color.dark,
    textAlign: "justify",
  },
  my1: {
    paddingVertical: width * 0.1,
  },
  fullWidth: {
    width: "100%",
  },
  greetingText: {
    color: color.primary,
    fontSize: width * 0.09,
    fontWeight: "bold",
    marginVertical: 5,
  },
  textInput: {
    backgroundColor: color.light,
    paddingVertical: width * 0.018,
    paddingHorizontal: height * 0.01,
    borderRadius: 5,
    width: "100%",
    marginVertical: 10,
  },
  textArea: {
    backgroundColor: color.light,
    paddingVertical: height * 0.012,
    paddingHorizontal: height * 0.01,
    borderRadius: 5,
    width: "100%",
    height: height * 0.15,
    marginVertical: 10,
  },
  divider: {
    width: "100%",
    height: 2,
    backgroundColor: color.light,
    marginVertical: 20,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  dFlex: {
    flexDirection: "row",
  },
  spaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  primaryText: {
    color: color.primary,
  },
  dangerText: {
    color: color.danger,
  },
  bold: {
    fontWeight: "bold",
    color: color.dark,
  },
});
