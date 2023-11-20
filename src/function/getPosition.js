import { PermissionsAndroid, StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Location from "expo-location";

const getPosition = async () => {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
  );

  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      let lat = location.coords.latitude;
      let long = location.coords.longitude;

      const initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      };

      return initialRegion;
    } catch (error) {
      ToastAndroid.show("Koneksi bermasalah!", 3000);
    }
  }
};

export default getPosition;
