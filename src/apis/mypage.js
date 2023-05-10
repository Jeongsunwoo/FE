import axios from "axios";
import { baseURL } from "./axios";

const getMyPageUserInfo = async () => {
  console.log("hi");
  const response = await baseURL.get(`/wine/mypage`);
  console.log("response1 => ", response);
  return response.data.data;
};

<<<<<<< HEAD
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
=======
const getMyPageReviewUser = async () => {
  const response = await baseURL.get(`/wine/mypage`);
  console.log("response2 => ", response);
  return response.data.data;
};

const removeUserReview = async (id) => {
  console.log("axios:", id);

  await baseURL.delete(`/wine/review/${id}`);
};

const updatePost = async (updatedPost) => {
  await axios.patch(`/wine/review/${updatedPost.id}`, {
    title: updatedPost.title,
    body: updatedPost.body,
  });
};

export { getMyPageReviewUser, getMyPageUserInfo, removeUserReview, updatePost };
>>>>>>> 3d05e53ca3d32ac62360ff202334487f6d5e2f13
