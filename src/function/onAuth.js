import { api } from "./baseUrl";
const onAuth = async (username, password) => {
  try {
    const res = await fetch(api + "login", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const data = await res.json();

    return data;
  } catch (e) { 
    console.log(e);
  }
};

export default onAuth;
