import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  View,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { tab } from "../styles/tab";
import { global } from "../styles/global";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

const Tab = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [refresh, setRefresh] = useState(Math.random());
  const [routeName, setRouteName] = useState();
  const [keyboardStatus, setKeyboardStatus] = useState('');

  const onNavigate = (page) => {
    navigation.navigate(page);
  };

  const onKeyboard = () => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus(1);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus(0);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  };
  const getPage = () => {
    setRouteName(route.name);
    setTimeout(() => {
      setRouteName(route.name);
    }, 100);
  };

  useFocusEffect(
    React.useCallback(() => {
      getPage();
      onKeyboard();
    }, [refresh])
  );
  return (
    <View style={[tab.container, global.spaceBetween]}>
      <TouchableOpacity
        onPress={() => {
          onNavigate("Home");
        }}
        style={tab.items}
      >
        <Image
          source={
            routeName == "Home"
              ? require("../../assets/img/icon/home-primary.png")
              : require("../../assets/img/icon/home-secondary.png")
          }
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          onNavigate("History");
        }}
        style={tab.items}
      >
        <Image
          source={
            routeName == "History"
              ? require("../../assets/img/icon/history-primary.png")
              : require("../../assets/img/icon/history-secondary.png")
          }
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          onNavigate("Profile");
        }}
        style={tab.items}
      >
        <Image
          source={
            routeName == "Profile"
              ? require("../../assets/img/icon/profile-primary.png")
              : require("../../assets/img/icon/profile-secondary.png")
          }
        />
      </TouchableOpacity>
    </View>
  );
};

export default Tab;
