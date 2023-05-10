import React from "react";
import styled from "../styles/css/detailPage.module.css";
import MyPageReviewList from "../components/MyPageReviewList";
import MypageUserInfo from "../components/MypageUserInfo";
import { useEffect } from "react";
import { notLoginRouting } from "../apis/auth/checkingLogin";
import { useNavigate } from "react-router-dom";

function MyPage() {
  const navigate = useNavigate();

  useEffect(() => {
    notLoginRouting(navigate);
  }, []);

  return (
    <>
      <div className={styled.wrap}>
        <MypageUserInfo></MypageUserInfo>
        <MyPageReviewList></MyPageReviewList>
      </div>
    </>
  );
}

export default MyPage;
