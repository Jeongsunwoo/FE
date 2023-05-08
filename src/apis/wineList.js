import instance from "./instance";

const wineListAxios = async () => {
  try {
    const { data } = await instance.get("/wine");
    return data;
  } catch (error) {
    console.log("error: getWineListAxios에서 데이터 통신 에러");
    throw error;
  }
};

const searchWineListAxios = async (searchData) => {
  try {
    const { data } = await instance.get("/search");
    return data;
  } catch (error) {
    console.log("error: wineListAxios에서 데이터 통신 에러");
    throw error;
  }
};

export { wineListAxios, searchWineListAxios };
