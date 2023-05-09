import React from "react";
import styled from "../styles/css/posting.module.css";
import { useInput } from "../utils/useInput";
import { useMutation, useQueryClient } from "react-query";
import { addReviewAxios } from "../apis/review";

function Posting({ wineName, isModalOpen }) {
  const initialState = {
    content: "",
  };
  const [input, handleInputChange, resetInput] = useInput(initialState);
  const queryClient = useQueryClient();
  const mutation = useMutation(addReviewAxios, {
    onSuccess: () => {
      alert("리뷰 작성 완료");
      isModalOpen();
      resetInput();
      queryClient.invalidateQueries("reviews");
    },
    onError: () => {
      alert("ERROR: 서버 에러 발생");
    },
  });

  const handleClickPosting = () => {
    if (!input) {
      alert("리뷰 내용을 입력해 주세요!");
      return;
    }
    mutation.mutate(input);
  };

  return (
    <div className={styled.outCon}>
      <div className={styled.modalCon}>
        <button className={styled.closeBtn} onClick={isModalOpen}>
          X
        </button>
        <h5 className={styled.title}>Review Posting</h5>
        <div className={styled.contentsCon}>
          <div className={styled.content}>
            <span className={styled.contentTitle}>NickName</span>
            <p className={styled.contentValue}>닉네임</p>
          </div>
          <div className={styled.content}>
            <span className={styled.contentTitle}>Wine</span>
            <p className={styled.contentValue}>{wineName}</p>
          </div>
          <div className={styled.content}>
            <span className={styled.contentTitle}>Review</span>
            <textarea
              rows={6}
              cols={50}
              value={input}
              onChange={handleInputChange}
              className={`${styled.contentValue} ${styled.reviewContent}`}
            />
          </div>
          <div className={styled.buttonCon}>
            <button className={styled.postingBtn} onClick={handleClickPosting}>
              Posting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posting;
