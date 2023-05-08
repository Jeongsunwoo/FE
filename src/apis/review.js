import { baseURL } from "./axios";

const wineInfoAndReviewsAxios = async (id) => {
  try {
    const { data } = await baseURL.get(`/wine/review/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};

const addReviewAxios = async (id) => {
  try {
    await baseURL.post(`/wine/review/${id}`);
  } catch (error) {
    throw error;
  }
};

export { wineInfoAndReviewsAxios, addReviewAxios };
