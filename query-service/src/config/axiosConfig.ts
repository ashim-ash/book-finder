import axios from "axios";

//base url config for request on data service
const instance = axios.create({
  baseURL: "http://localhost:4000/api",
});

//post method, returns json data, serach key passed as json
export const requestDataServer = async (
  searchKeyword: string
) => {
  try {
    const response = await instance.post("/fetch-books", {
      key: searchKeyword,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default instance;
