import React, { useState } from "react";
import styled from "../styles/css/winePost.module.css";
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function WineDetailPost({ wineInfo, isLike }) {
  const navigate = useNavigate();
  const [islike, setIsLike] = useState(isLike);
  console.log(isLike);

  const likeToggle = () => {
    setIsLike(!islike);
  };

  const {
    recommendCount,
    imageUrl,
    country,
    winery,
    grape,
    vintage,
    name,
    type,
    information,
  } = wineInfo;

  return (
    <div className={styled.postCon}>
      {/* 좋아요 버튼 */}
      <div className={styled.likeCon} onClick={likeToggle}>
        {islike ? (
          <AiFillHeart
            style={{
              marginLeft: "1rem",
              fontSize: "2rem",
              lineHeight: "2rem",
              paddingTop: "5px",
              color: "#b92427",
            }}
          ></AiFillHeart>
        ) : (
          <AiOutlineHeart
            style={{
              marginLeft: "1rem",
              fontSize: "2rem",
              lineHeight: "2rem",
              paddingTop: "5px",
              color: "#b92427",
            }}
          ></AiOutlineHeart>
        )}
        <span className={styled.like}>{recommendCount}</span>
      </div>
      <div className={styled.leftCon}>
        <div className={styled.imgCon}>
          <img src={imageUrl} alt="wine-image" />
        </div>
      </div>
      <div className={styled.detailCon}>
        <h3 className={`${styled.data} ${styled.name}`}>{name}</h3>

        <div className={`${styled.infoCon} ${styled.country}`}>
          <span className={styled.title}>생산국가/지역</span>
          <p className={styled.data}>{country}</p>
        </div>
        <div className={`${styled.infoCon} ${styled.grape}`}>
          <span className={styled.title}>포도품종</span>
          <p className={styled.data}>{grape}</p>
        </div>
        <div className={`${styled.infoCon} ${styled.vintage}`}>
          <span className={styled.title}>빈티지</span>
          <p className={styled.data}>{vintage}</p>
        </div>
        <div className={`${styled.infoCon} ${styled.type}`}>
          <span className={styled.title}>와인타입</span>
          <p className={styled.data}>{type}</p>
        </div>
        <div className={`${styled.infoCon} ${styled.winery}`}>
          <span className={styled.title}>와이너리</span>
          <p className={styled.data}>{winery}</p>
        </div>
        <div className={`${styled.infoCon} ${styled.information}`}>
          <span className={styled.title}>와인 정보</span>
          <p className={styled.data}>{information}</p>
        </div>
        <div
          className={styled.review}
          onClick={() => navigate(`/wineList/${wineInfo.id}`)}
        >
          GO TO REVIEW
        </div>
      </div>
    </div>
  );
}

export default WineDetailPost;
