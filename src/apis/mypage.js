import axios from "axios";
import { baseURL } from "./axios";

const getMyPageUserInfo = async () => {
  console.log("hi");
  const response = await baseURL.get(`/wine/mypage`);
  console.log("response1 => ", response);
  return response.data.data;
};

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
