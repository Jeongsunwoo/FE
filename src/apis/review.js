import { instance } from "../api/axios"

const wineInfoAndReviewsAxios = async (id) => {
  try {
    const { data } = await instance.get("/reviews");
    return data;
  } catch (error) {
    throw error;
  }
};

const addReviewAxios = async () => {
  try {
    await instance.post("/reviews");
  } catch (error) {
    throw error;
  }
};

export { wineInfoAndReviewsAxios, addReviewAxios };
