import { api } from "./baseUrl";

const getIklan = async () => {
  const res = await fetch(api + "getIklan");

  const data = res.json();

  return data;
};

export default getIklan;
