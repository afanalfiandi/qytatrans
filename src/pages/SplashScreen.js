import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { color } from "../styles/color";
import { global } from "../styles/global";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { splashscreen } from "../styles/splashscreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import registerForPushNotificationsAsync from "../function/registerPushNotificationsAsync";

const SplashScreen = () => {
  const navigation = useNavigation();
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  const navig = async () => {
    const intro = await AsyncStorage.getItem("intro");
    const session = await AsyncStorage.getItem("id_penumpang");

    if (intro == "1" && session == null) {
      navigation.navigate("Auth");
    } else if (intro == null && session == null) {
      navigation.navigate("Intro");
    } else {
      navigation.navigate("Home");
    }
  };

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });

  useEffect(() => {
    setTimeout(() => {
      navig();
    }, 3000);

    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);
  return (
    <SafeAreaView style={[global.container, splashscreen.container]}>
      <Image source={require("../../assets/img/app-logo.png")} />
    </SafeAreaView>
  );
};

export default SplashScreen;
