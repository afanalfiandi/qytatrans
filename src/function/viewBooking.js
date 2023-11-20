import { api } from "./baseUrl";

const viewBooking = async (no_transaksi) => {
  const res = await fetch(api + "viewBooking", {
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      no_transaksi: no_transaksi,
    }),
  });

  const data = await res.json();

  return data;
};

export default viewBooking;
