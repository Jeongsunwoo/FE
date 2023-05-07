import React from "react";
import styled from "../styles/css/review.module.css";
import { BsPersonFill } from "react-icons/bs";

function Review({ review }) {
  return (
    <div className={styled.reviewCon}>
      <div className={styled.nickName}>
        <h3>
          <BsPersonFill /> {review.nickName}
        </h3>
      </div>
      <p className={styled.title}>{review.title}</p>
      <span className={styled.date}>{review.date}</span>
      <p className={styled.comment}>{review.comment}</p>
    </div>
  );
}

export default Review;
