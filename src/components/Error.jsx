import React from "react";
import styled from "../styles/css/app.module.css";

function Error({ isError }) {
  return (
    <div className={styled.error}>
      {isError ? "❗ERROR : 서버 에러 발생" : "🔵 Loading...로딩 중입니다"}
    </div>
  );
}

export default Error;
