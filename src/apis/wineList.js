import { instance } from "./axios";

const wineListAxios = async () => {
  try {
    const { data } = await instance.get("/wine/search/read");
    return data;
  } catch (error) {
    throw error;
  }
};

const searchWineListAxios = async (searchData) => {
  try {
    const { data } = await instance.get("wine/search");
    return data;
  } catch (error) {
    throw error;
  }
};

export { wineListAxios, searchWineListAxios };
