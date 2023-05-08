import React from "react";
import styled from "../styles/css/myPageReviewList.module.css";

function ReviewList() {

    const post = [
        {
            id: 1,
            content: "탄닌감이 적당해서 좋아요~(엄지척)",
            createdAt: "2023-05-05 20:59:00",
            modifiedAt: "2023-05-05 20:59:00",
            member: {
                id: 1,
                memberId: "identity",
                nicknam: "wineLuver"
            }
        },
        {
            id: 2,
            content: "탄닌감이 적당해서 좋아요~(엄지척)",
            createdAt: "2023-05-05 20:59:00",
            modifiedAt: "2023-05-05 20:59:00",
            member: {
                id: 1,
                memberId: "identity",
                nicknam: "wineLuver"
            }
        },
    ]

    return (
        <div className={styled.wrap}>
            <div className={styled.postingCon}>
                <div className={`${styled.infoCon} ${styled.country}`}>
                    <span className={styled.title}>생산국가/지역</span>
                    {/* <p className={styled.data}>{post.country}</p> */}
                </div>
                <span className={styled.title}>생산국가/지역</span>
                <button className={styled.postingBtn}>수정하기</button>
                <button className={styled.postingBtn}>삭제하기</button>
            </div>
        </div>
    )
}

export default ReviewList;
