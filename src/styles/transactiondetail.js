import { Dimensions, StyleSheet } from "react-native";
import { color } from "./color";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export const transactiondetail = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerTxt: {
    fontSize: width * 0.05,
    fontWeight: "bold",
    color: color.white,
  },
  wrapper: {
    height: height * 0.63,
    marginTop: width * 0.15,
  },
  body: {
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    width: "100%",
    height: "80%",
    backgroundColor: color.white,
    paddingHorizontal: width * 0.055,
    paddingTop: height * 0.035,
  },
  footer: {
    borderTopColor: color.light,
    flex: 1,
    backgroundColor: color.lighter,
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15,
  },
  footerWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  circleBottomLeft: {
    backgroundColor: color.primary,
    width: 20,
    height: 20,
    position: "absolute",
    bottom: 0,
    borderTopEndRadius: 100,
  },
  circleBottomRight: {
    backgroundColor: color.primary,
    width: 20,
    height: 20,
    position: "absolute",
    bottom: 0,
    right: 0,
    borderTopStartRadius: 100,
  },
  circleTopLeft: {
    backgroundColor: color.primary,
    width: 20,
    height: 20,
    position: "absolute",
    top: 0,
    borderBottomEndRadius: 100,
  },
  circleTopRight: {
    backgroundColor: color.primary,
    width: 20,
    height: 20,
    position: "absolute",
    top: 0,
    right: 0,
    borderBottomStartRadius: 100,
  },
  dateText: {
    fontSize: width * 0.038,
    textTransform: "uppercase",
    color: color.grey,
    fontWeight: "bold",
  },
  form: {
    flexDirection: "row",
    marginVertical: 10,
  },
  row: {
    width: "10%",
    alignItems: "center",
    height: "auto",
  },
  indicatorContainer: {
    width: "100%",
    alignItems: "center",
    flex: 1,
  },
  dividerIndicator: {
    width: 2,
    backgroundColor: color.grey,
    marginVertical: 3,
    opacity: 0.7,
  },
  formGroup: {
    marginVertical: 5,
  },
  btnWrapper: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    padding: 10,
  },
  btnText: {
    color: color.white,
    borderBottomWidth: 1,
    borderColor: color.white,
    paddingBottom: 3
  }
});
