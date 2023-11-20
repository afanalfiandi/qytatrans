import { View, Text } from "react-native";
import React from "react";
import { api } from "./baseUrl";

const getJadwal = async (id_rute) => {
  const res = await fetch(api + "getJadwal", {
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      id_rute: id_rute,
    }),
  });

  const data = await res.json();

  return data;
};

export default getJadwal;
