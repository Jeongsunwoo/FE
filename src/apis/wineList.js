<<<<<<< HEAD
import { instance } from "../api/axios"
=======
import { baseURL } from "./axios";
>>>>>>> 0108c75796149d05a053221683944e5cf8f3928b

const wineListAxios = async () => {
  try {
    const { data } = await baseURL.get("/wine/rank", {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    return data;
  } catch (error) {
    console.log("와인리스트 에러");
    throw error;
  }
};

const searchWineListAxios = async (searchData) => {
  try {
    const { data } = await baseURL.get("/wine/rank");
    return data;
  } catch (error) {
    console.log("와인리스트 에러");
    throw error;
  }
};

export { wineListAxios, searchWineListAxios };
