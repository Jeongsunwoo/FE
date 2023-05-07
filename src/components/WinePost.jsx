import React, { useState } from "react";
import styled from "../styles/css/winePost.module.css";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function WinePost({ detailActive, post }) {
  const navigate = useNavigate();

  const [islike, setIsLike] = useState(false);

  const likeToggle = () => {
    setIsLike(!islike);
  };

  return (
    <div className={styled.postCon}>
      {/* 좋아요 버튼 */}
      {detailActive && (
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
          <span className={styled.like}>{post.recommend_count}</span>
        </div>
      )}
      <div className={styled.leftCon}>
        <div className={styled.imgCon}>
          <img src={post.image_url} alt="wine-image" />
        </div>
      </div>
      <div className={styled.detailCon}>
        <h3 className={`${styled.data} ${styled.name}`}>{post.name}</h3>

        <div className={`${styled.infoCon} ${styled.country}`}>
          <span className={styled.title}>생산국가/지역</span>
          <p className={styled.data}>{post.country}</p>
        </div>
        <div className={`${styled.infoCon} ${styled.grape}`}>
          <span className={styled.title}>포도품종</span>
          <p className={styled.data}>{post.grape}</p>
        </div>
        <div className={`${styled.infoCon} ${styled.vintage}`}>
          <span className={styled.title}>빈티지</span>
          <p className={styled.data}>{post.vintage}</p>
        </div>
        <div className={`${styled.infoCon} ${styled.type}`}>
          <span className={styled.title}>와인타입</span>
          <p className={styled.data}>{post.type}</p>
        </div>
        {detailActive && (
          <>
            <div className={`${styled.infoCon} ${styled.winery}`}>
              <span className={styled.title}>와이너리</span>
              <p className={styled.data}>{post.winery}</p>
            </div>
            <div className={`${styled.infoCon} ${styled.information}`}>
              <span className={styled.title}>와인 정보</span>
              <p className={styled.data}>{post.information}</p>
            </div>
          </>
        )}
        <div
          className={styled.review}
          onClick={() => navigate(`/wineList/${post.id}`)}
        >
          GO TO REVIEW
        </div>
      </div>
    </div>
  );
}

export default WinePost;
