import axios from "axios";
import { baseURL } from "./axios";

const getMyPageUserInfo = async () => {
    const response = await baseURL.get(`/wine/mypage`)
    console.log("response1 => ",response)
    return response.data.data
}

const removeUserReview = async (id) => {
  console.log("삭제 아이디 => ",id)
    await baseURL.delete(`/wine/review/${id}`)
}

const updatePost = async (updatedPost) => {
    await axios.patch(`/wine/review/${updatedPost.id}`,
        {
          content: updatedPost.content,
        }
      );
    }

export { getMyPageUserInfo, removeUserReview, updatePost }