import { api } from "./baseUrl";

const getHarga = async (id_rute) => {
  const res = await fetch(api + "getHarga", {
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

export default getHarga;
