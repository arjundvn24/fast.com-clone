import axios from "axios";
export const getRequest = async (url) => {
  const data = await axios
    .get(url)
    .then(resp => resp.data);
    return data;
};
