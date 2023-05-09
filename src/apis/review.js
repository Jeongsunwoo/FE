<<<<<<< HEAD
import { instance } from "../api/axios"
=======
import { baseURL } from "./axios";
>>>>>>> 0108c75796149d05a053221683944e5cf8f3928b

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
