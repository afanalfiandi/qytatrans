import { api } from "./baseUrl";

const getKendaraan = async (id_rute) => {
  const res = await fetch(api + "getKendaraan", {
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

export default getKendaraan;
