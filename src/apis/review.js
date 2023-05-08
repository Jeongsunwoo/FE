import { instance } from "./axios";

const wineInfoAndReviewsAxios = async (id) => {
  try {
    const { data } = await instance.get(`/wine/review/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};

const addReviewAxios = async (id) => {
  try {
    await instance.post(`wine/review/${id}`);
  } catch (error) {
    throw error;
  }
};

export { wineInfoAndReviewsAxios, addReviewAxios };
