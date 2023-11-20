import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { global } from "../styles/global";
import { history } from "../styles/history";
import { TabView, SceneMap } from "react-native-tab-view";
import TopBar from "./Tab/TopBar";
import Tab from "../component/Tab";

const History = () => {
  return (
    <SafeAreaView style={global.container}>
      <TopBar />
      <Tab />
    </SafeAreaView>
  );
};

export default History;
