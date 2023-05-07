import React from "react";
import styled from "../styles/css/detailPage.module.css";
import Review from "./Review";

function ReviewList() {
  const reviews = [
    {
      date: "2023.05.07",
      title:
        "타이틀입니다.타이틀입니다.타이틀입니다.타이틀입니다.타이틀입니다.",
      nickName: "닉네임입니다.",
      comment:
        "댓글내용입니다댓글내용입니다댓글내용입니다댓글내댓글내용입니다댓글내용입니다댓글내용입니다댓글내용입니다댓글내용입니다댓글내용입니다댓글내용입니다용입니다댓글내용입니다댓글내용입니다댓글내용입니다댓글내용입니다ㅏㅏㅏㅏㅏㅏ",
    },
    {
      date: "2023.05.07",
      title: "타이틀입니다.",
      nickName: "닉네임입니다.",
      comment: "댓글내용입니다ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ",
    },
    {
      date: "2023.05.07",
      title: "타이틀입니다.",
      nickName: "닉네임입니다.",
      comment: "댓글내용입니다ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ",
    },
    {
      date: "2023.05.07",
      title: "타이틀입니다.",
      nickName: "닉네임입니다.",
      comment: "댓글내용입니다ㅏㅏㅏㅏ",
    },
  ];
  return (
    <div className={styled.listCon}>
      {reviews.map((review) => {
        return <Review review={review}></Review>;
      })}
    </div>
  );
}

export default ReviewList;
