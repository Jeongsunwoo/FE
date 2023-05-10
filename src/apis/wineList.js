import { baseURL } from "./axios";

const wineListAxios = async () => {
  try {
    const { data } = await baseURL.get("/wine/search/read", {
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

const rankingListAxios = async () => {
  try {
    const { data } = await baseURL.get("/wine/rank");
    return data.data;
  } catch (error) {
    console.log("랭킹리스트 에러");
    throw error;
  }
};

const searchWineListAxios = async (payload) => {
  try {
    const { data } = await baseURL.get("/wine/search", { params: payload });

    return data.data;
  } catch (error) {
    console.log("검색리스트 에러");
    throw error;
  }
};

export { wineListAxios, searchWineListAxios, rankingListAxios };
