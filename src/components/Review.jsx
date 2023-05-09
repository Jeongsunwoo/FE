import styled from "../styles/css/review.module.css";
import { BsPersonFill } from "react-icons/bs";

function Review({ wineInfo, review }) {
  const date = review.createdAt.slice(0, 10);
  return (
    <div className={styled.reviewCon}>
      <div className={styled.nickName}>
        <h3>
          <BsPersonFill /> {review.member.nickname}
        </h3>
      </div>
      <p className={styled.title}>{wineInfo?.name}</p>
      <span className={styled.date}>{date}</span>
      <p className={styled.comment}>{review?.content}</p>
    </div>
  );
}

export default Review;
