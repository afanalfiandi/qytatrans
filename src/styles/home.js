import { Dimensions, StyleSheet } from "react-native";
import { color } from "./color";
import { StatusBar } from "expo-status-bar";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export const home = StyleSheet.create({
  header: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    marginBottom: 10,
    borderRadius: 6,
  },
  headerText: {
    fontSize: width * 0.059,
    fontWeight: "bold",
    color: color.dark,
    alignItems: "center",
  },
  form: {
    flexDirection: "row",
    height: height * 0.23,
    marginBottom: height * 0.008,
  },
  row: {
    width: "10%",
    alignItems: "center",
    height: "65%",
    justifyContent: "center",
  },
  indicatorContainer: {
    width: "100%",
    alignItems: "center",
    height: "70%",
  },
  primaryIndicator: {
    width: 15,
    height: 15,
    backgroundColor: color.primary,
    borderRadius: 100,
  },
  dividerIndicator: {
    width: 2,
    backgroundColor: color.grey,
    flex: 1,
    marginVertical: 3,
    opacity: 0.7,
  },
  secondaryIndicator: {
    width: 15,
    height: 15,
    backgroundColor: color.danger,
    borderRadius: 100,
  },
  inputContainer: {
    width: "100%",
  },
  formGroup: {
    marginVertical: 7.5,
  },
  labelInput: {
    color: color.grey,
    fontWeight: "bold",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: color.grey,
    paddingBottom: 3,
  },
  inputText: {
    color: color.dark,
    fontSize: Dimensions.get("screen").width * 0.04,
    fontWeight: "bold",
  },
  syncButton: {
    position: "absolute",
    right: 0,
    top: 0,
  },
  mapSection: {
    height: height * 0.25,
  },
  mapContainer: {
    flex: 1,
    marginTop: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  dateContainer: {
    marginTop: 10,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: width * 0.045,
    marginBottom: 10,
  },
  map: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  bottomSheetSection: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    marginLeft: width * 0.05,
  },
  bottomSheet: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: color.lighter,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  contentContainer: {
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
  bannerContainer: {},
  banner: {
    width: width * 0.7,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 20,
  },
  indicator: {
    backgroundColor: color.white,
    marginVertical: 10,
    width: "30%",
    height: 7,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 2,
  },
  itemContainer: {
    justifyContent: "center",
    width: width * 0.7,
    height: height * 0.15,
    backgroundColor: color.white,
    paddingHorizontal: width * 0.04,
    borderRadius: 10,
    margin: 5,
    shadowColor: color.dark,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  routeContainer: {
    alignItems: "center",
  },
  routeText: {
    fontWeight: "bold",
    fontSize: width * 0.04,
    marginLeft: 5,
  },
  historyRow: {
    marginVertical: 7.5,
  },
  datePickerContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    height: height,
    zIndex: 100,
    position: "absolute",
    width: "100%",
    marginLeft: width * 0.05,
  },
  datePickerOpt: {
    backgroundColor: color.white,
    textHeaderColor: color.primary,
    textDefaultColor: color.primary,
    selectedTextColor: "#fff",
    mainColor: color.primary,
    textSecondaryColor: color.muted,
    borderColor: "rgba(122, 146, 165, 0.1)",
  },
  timePickerContainer: {
    height: height,
    zIndex: 100,
    position: "absolute",
    width: "100%",
    marginLeft: width * 0.05,
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  datePicker: {
    marginTop: height * 0.28,
  },

  routeModal: {
    justifyContent: "center",
  },
  routeModalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  petaModal: {
    flex: 1,
  },
  radioContainer: {
    alignItems: "center",
  },
  timeForm: {
    backgroundColor: color.white,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 2,
  },
  timeCheckbox: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    paddingHorizontal: 5,
  },
  mapModal: {
    flex: 1,
    backgroundColor: "white",
  },
  markerContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
  },
  btnMapContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "80%",
    width: "100%",
    padding: '5%'
  },
});
