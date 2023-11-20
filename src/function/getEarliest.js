import { StyleSheet, Text, View } from "react-native";
import React, { useMemo } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "./baseUrl";

const getEarliest = async () => {
  const session = await AsyncStorage.getItem("id_penumpang");

  const res = await fetch(api + "getEarliest", {
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      id_penumpang: session, 
    }),
  });

  const data = await res.json();
  return data;
};

export default getEarliest;
