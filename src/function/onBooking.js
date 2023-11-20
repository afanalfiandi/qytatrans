import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { api } from "./baseUrl";

const onBooking = async (
  id_penumpang,
  rute,
  date,
  jadwal,
  kendaraan,
  latitude,
  longitude
) => {
  const res = await fetch(api + "booking", {
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      id_penumpang: id_penumpang,
      id_rute: rute,
      tanggal: date,
      pukul: jadwal,
      id_kendaraan: kendaraan,
      latitude: latitude,
      longitude: longitude,
    }),
  });

  const data = await res.json();

  return data;
};

export default onBooking;
