import axios from "axios";
import { baseURL, instance } from "./axios";

const getMyPageReviewUser = async () => {
    const response = await baseURL.get(`/mypage`)
    return response.data.data
}

const removeUserReview = async (id) => {
    baseURL.delete(`/review/${id}`)
}

const updatePost = async (updatedPost) => {
    await axios.patch(`/review/${updatedPost.id}`,
        {
          title: updatedPost.title,
          body: updatedPost.body,
        }
      );
    }

export { getMyPageReviewUser, removeUserReview, updatePost }