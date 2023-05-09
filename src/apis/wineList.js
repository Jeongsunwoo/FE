import { instance } from "../api/axios"

const wineListAxios = async () => {
  try {
    const { data } = await instance.get("/wine");
    return data;
  } catch (error) {
    throw error;
  }
};

const searchWineListAxios = async (searchData) => {
  try {
    const { data } = await instance.get("/search");
    return data;
  } catch (error) {
    throw error;
  }
};

export { wineListAxios, searchWineListAxios };
