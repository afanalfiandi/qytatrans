import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  useWindowDimensions,
  Dimensions,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { global } from "../../styles/global";
import { history } from "../../styles/history";
import { TabView, SceneMap } from "react-native-tab-view";
import Diterima from "./Diterima";
import Selesai from "./Selesai";
import Dibatalkan from "./Dibatalkan";
import Menunggu from "./Menunggu";
import Penjemputan from "./Penjemputan";

const Tab = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "menunggu", title: "Menunggu" },
    { key: "diterima", title: "Diterima" },
    { key: "jemput", title: "Dalam Penjemputan" },
    { key: "selesai", title: "Selesai" },
    { key: "dibatalkan", title: "Dibatalkan" },
  ]);

  const renderScene = SceneMap({
    menunggu: Menunggu,
    diterima: Diterima,
    jemput: Penjemputan,
    selesai: Selesai,
    dibatalkan: Dibatalkan,
  });

  const renderTabBar = (props) => {
    return (
      <View style={{ marginVertical: 10 }}>
        <ScrollView horizontal>
          {routes.map((item, ind) => {
            return (
              <TouchableOpacity
                onPress={() => setIndex(ind)}
                key={ind}
                style={[
                  history.tabBtn,
                  {
                    borderBottomWidth: 2,
                    opacity: index == ind ? 1 : 0.3,
                  },
                ]}
              >
                <Text style={global.bold}>{item.title}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  };
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
      initialLayout={{ width: layout.width }}
    />
  );
};

export default Tab;

const styles = StyleSheet.create({});
