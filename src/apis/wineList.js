import { baseURL } from "./axios";

const wineListAxios = async () => {
  try {
    const { data } = await baseURL.get("/wine/rank", {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    return data.data;
  } catch (error) {
    console.log("와인리스트 에러");
    throw error;
  }
};

const searchWineListAxios = async (payload) => {
  try {
    console.log("payload:", payload);
    const { data } = await baseURL.get("/wine/search", { params: payload });
    console.log(data.data);
    return data.data;
  } catch (error) {
    console.log("검색리스트 에러");
    throw error;
  }
};

export { wineListAxios, searchWineListAxios };
