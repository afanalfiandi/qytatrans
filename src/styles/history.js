import { Dimensions, StyleSheet } from "react-native";
import { color } from "./color";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export const history = StyleSheet.create({
  tabbar: {
    alignItems: "flex-start",
  },
  tabBtn: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 5,
    borderBottomColor: color.primary,
    paddingHorizontal: 10,
  },
  row: {
    flex: 1,
    backgroundColor: color.white,
    padding: width * 0.04,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 5,
    shadowColor: color.dark,
    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 4,
  },
  rowHeader: {
    marginVertical: 10,
    alignItems: "center",
  },
  rowBody: {
    marginVertical: 5,
    alignItems: "center",
    borderWidth: 1,
  },
});
