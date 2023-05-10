import React from "react";
import styled from "../styles/css/detailPage.module.css";
import Review from "./Review";
import { useSelector } from "react-redux";

function ReviewList() {
  const { wineInfo, reviews } = useSelector((state) => state.wineInfoSlice);

  return (
    <div className={styled.listCon}>
      {reviews?.map((review) => {
        return (
          <Review key={review.id} wineInfo={wineInfo} review={review}></Review>
        );
      })}
    </div>
  );
}

export default ReviewList;
