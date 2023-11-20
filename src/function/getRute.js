import { api } from "./baseUrl";

const getRute = async () => {
  const res = await fetch(api + "getRute");
  const data = await res.json();

  return data;
};

export default getRute;