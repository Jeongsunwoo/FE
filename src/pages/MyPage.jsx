import React from "react";
import styled from "../styles/css/detailPage.module.css";
import MyPageReviewList from "../components/MyPageReviewList";
import MypageUserInfo from "../components/MypageUserInfo";

function MyPage() {
  return (
    <>
      <div className={styled.wrap}>
        <div className={styled.line}></div>
        <MypageUserInfo></MypageUserInfo>
        <MyPageReviewList></MyPageReviewList>
      </div>
    </>
  );
}

export default MyPage;
