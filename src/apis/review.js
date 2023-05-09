import { baseURL } from "./axios";

const wineInfoAndReviewsAxios = async (id) => {
  try {
    const { data } = await baseURL.get(`/wine/review/${id}`);
    return data.data;
  } catch (error) {
    throw error;
  }
};

const increaseLikeAxios = async (id) => {
  try {
    const { data } = await baseURL.post(`/wine/recommend/${id}`);
    return data.data;
  } catch (error) {
    throw error;
  }
};

const addReviewAxios = async (payload) => {
  try {
    const content = { content: payload.content };
    await baseURL.post(`/wine/review/${payload.id}`, content);
  } catch (error) {
    throw error;
  }
};

export { wineInfoAndReviewsAxios, addReviewAxios, increaseLikeAxios };
