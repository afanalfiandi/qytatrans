import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ToastAndroid } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "./baseUrl";

const profilePict = async (id, uri, name, type) => {
  const data = new FormData();
  data.append("id", id);
  data.append("file", {
    uri: uri,
    type: type,
    name: name,
  });

  try {
    let res = await fetch(api + "profilePict", {
      method: "post",
      body: data,
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    });

    let result = await res.json();

    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default profilePict;
