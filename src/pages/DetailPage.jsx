import React, { useEffect, useState } from "react";
import styled from "../styles/css/detailPage.module.css";
import ReviewList from "../components/ReviewList";
import Posting from "../components/Posting";
import { useQuery } from "react-query";
import { wineInfoAndReviewsAxios } from "../apis/review";
import { useParams } from "react-router";
import WineDetailPost from "../components/wineDetailPost";
import { useDispatch } from "react-redux";
import { onFetchWineInfo } from "../redux/modules/wineInfoSlice";
import Error from "../components/Error";
import { notLoginRouting } from "../hooks/useCheckingLogin";

function DetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isError, data } = useQuery("reviews", () =>
    wineInfoAndReviewsAxios(id)
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalOpenToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    notLoginRouting();
    if (data) {
      dispatch(onFetchWineInfo(data));
    }
  }, [dispatch, data]);
  return (
    <>
      {isModalOpen && (
        <Posting
          wineName={data?.wine.name}
          isModalOpen={modalOpenToggle}
        ></Posting>
      )}
      <div className={styled.wrap}>
        <h1 className={styled.title}>WINE info</h1>
        {data ? (
          <WineDetailPost
            wineInfo={data?.wine}
            isLike={data?.recommend}
          ></WineDetailPost>
        ) : (
          <Error isError={isError}></Error>
        )}
        <div className={styled.postingCon}>
          <button className={styled.postingBtn} onClick={modalOpenToggle}>
            리뷰 작성하기
          </button>
        </div>
        <div className={styled.line}></div>
        <h1 className={styled.title}>WINE review</h1>
        {data ? <ReviewList></ReviewList> : <Error isError={isError}></Error>}
      </div>
    </>
  );
}

export default DetailPage;
