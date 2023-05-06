import React from "react";
import styled from "../styles/css/winePost.module.css";
import { Link, useNavigate } from "react-router-dom";

function WinePost({ type, post }) {
  const navigate = useNavigate();
  return (
    <div
      className={styled.postCon}
      onClick={() => navigate(`/detail/${post.id}`)}
    >
      <div className={styled.imgCon}>
        <img src={post.image_url} alt="wine-image" />
      </div>
      <div className={styled.detailCon}>
        <h3 className={`${styled.data} ${styled.name}`}>{post.name}</h3>
        <div className={`${styled.infoCon} ${styled.country}`}>
          <span className={styled.title}>생산국가/지역</span>
          <p className={`${styled.data} ${styled.country}`}>{post.country}</p>
        </div>
        <div className={`${styled.infoCon} ${styled.grape}`}>
          <span className={styled.title}>포도품종</span>
          <p className={`${styled.data} ${styled.grape}`}>{post.grape}</p>
        </div>
        <div className={`${styled.infoCon} ${styled.vintage}`}>
          <span className={styled.title}>빈티지</span>
          <p className={`${styled.data} ${styled.vintage}`}>{post.vintage}</p>
        </div>
        <div className={`${styled.infoCon} ${styled.type}`}>
          <span className={styled.title}>와인타입</span>
          <p className={`${styled.data} ${styled.type}`}>{post.type}</p>
        </div>
        {}
        <div className={`${styled.infoCon} ${styled.winery}`}>
          <span className={styled.title}>와이너리</span>
          <p className={`${styled.data} ${styled.winery}`}>{post.winery}</p>
        </div>
        <div className={`${styled.infoCon} ${styled.information}`}>
          <span className={styled.title}>와인 정보</span>
          <p className={`${styled.data} ${styled.information}`}>
            {post.information}
          </p>
        </div>
      </div>
      <div className={styled.review}>
        <Link to="/detail" className={styled.riveiwBtn}>
          GO TO REVIEW
        </Link>
      </div>
    </div>
  );
}

export default WinePost;
