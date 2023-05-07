import React from "react";
import styled from "../styles/css/posting.module.css";

function Posting({ isModalOpen }) {
  return (
    <div className={styled.outCon}>
      <div className={styled.modalCon}>
        <h5 className={styled.title}>Review Posting</h5>
        <div className={styled.contentsCon}>
          <div className={styled.content}>
            <span className={styled.contentTitle}>NickName</span>
            <p className={styled.contentValue}>닉네임</p>
          </div>
          <div className={styled.content}>
            <span className={styled.contentTitle}>Wine</span>
            <p className={styled.contentValue}>와인이름</p>
          </div>
          <div className={styled.content}>
            <span className={styled.contentTitle}>Review</span>
            <textarea
              rows={6}
              cols={50}
              className={`${styled.contentValue} ${styled.reviewContent}`}
            />
          </div>
          <div className={styled.buttonCon}>
            <button className={styled.postingBtn} onClick={isModalOpen}>
              Posting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posting;
