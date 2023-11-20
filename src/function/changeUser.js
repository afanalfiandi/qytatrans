import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "./baseUrl";
const changeUser = async (nama, username, email, whatsapp, alamat) => {
  const id_penumpang = await AsyncStorage.getItem("id_penumpang");
  const res = await fetch(api + "changeUser", {
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      id_penumpang: id_penumpang,
      nama: nama,
      username: username,
      email: email,
      whatsapp: whatsapp,
      alamat: alamat,
    }),
  });

  const data = await res.json();
  return data;
};

export default changeUser;
