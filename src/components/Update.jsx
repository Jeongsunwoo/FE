import React from "react";
import styled from "../styles/css/posting.module.css";
import { useInput } from "../utils/useInput";
import { useMutation, useQueryClient } from "react-query";
import { upDatePost } from "../apis/mypage";
import { useNavigate } from "react-router-dom";

function Update({ reviewId, wineName, wineContent, isModalOpen }) {
  const queryClient = useQueryClient()
  const [input, setInput] = useInput("")

  const mutation = useMutation(upDatePost, {
    onSuccess: () => {
      alert("수정 완료")
      isModalOpen()
      queryClient.invalidateQueries("mypageuser")
    },
    onError: () => {
    }
  })

  const handleClickUpdate = () => {

    if (!input) {
      alert("수정 내용을 입력해 주세요!")
      return;
    }

    const updatedPost = {
      reviewId,
      content: input
    }

    mutation.mutate(updatedPost)
  };

  return (
    <div className={styled.outCon}>
      <div className={styled.modalCon}>
        <button className={styled.closeBtn} onClick={() => isModalOpen()}>
          X
        </button>
        <h5 className={styled.title}>Review Update</h5>
        <div className={styled.contentsCon}>
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
              onChange={setInput}
              placeholder={`${wineContent}`}
              className={`${styled.contentValue} ${styled.reviewContent}`}
            />
          </div>
          <div className={styled.buttonCon}>
            <button className={styled.postingBtn} onClick={handleClickUpdate}>
              수정완료
            </button>
          </div>
        </div>
      </div >
    </div>
  );
}

export default Update