import React from "react";
import styled from "../styles/css/detailPage.module.css";
import MypageList from "../components/MypageList";
import MyPageReviewList from "../components/MyPageReviewList";

function MyPage() {
  return (
    <>
      <div className={styled.wrap}>
        <div className={styled.line}></div>
        <MypageList></MypageList>
        {/* <MyPageReviewList></MyPageReviewList> */}
      </div>
    </>
  );
}

export default MyPage;
