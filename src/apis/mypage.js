import { baseURL } from "./axios";

const getMyPageUserInfo = async () => {
  const response = await baseURL.get(`/wine/mypage`);
  return response.data.data;
};

const getMyPageReviewUser = async () => {
  const response = await baseURL.get(`/wine/mypage`);
  return response.data.data;
};

const removeUserReview = async (id) => {
  await baseURL.delete(`/wine/review/${id}`);
};

const upDatePost = async (payload) => {
  await baseURL.put(`/wine/review/${payload.reviewId}`, {
    content: payload.content,
  });
};

export { getMyPageReviewUser, getMyPageUserInfo, removeUserReview, upDatePost };
