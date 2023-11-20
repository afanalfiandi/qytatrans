import { api } from "../function/baseUrl";

const onRegister = async (nama, email, telp, alamat, username, password) => {
  const res = await fetch(api + "register", {
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      nama: nama,
      email: email,
      whatsapp: telp,
      alamat: alamat,
      username: username,
      password: password,
    }),
  });

  const data = await res.json();

  return data;
};

export default onRegister;
