import React, { useState } from "react";
import styled from "../styles/css/myPageReviewList.module.css";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getMyPageReviewUser, removeUserReview } from "../apis/mypage";
import Update from "./Update";

function MyPageReviewList() {
    const queryClient = useQueryClient();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [upDate, setUpdata] = useState();

    const { data } = useQuery("mypageuser", getMyPageReviewUser);
    const deletemutation = useMutation(removeUserReview, {
        onSuccess: () => {
            queryClient.invalidateQueries("mypageuser");
        },
    });

    const clickRemoveHandler = (id) => {
        deletemutation.mutate(id);
    };

    const modalOpenToggle = (post) => {
        setUpdata(
            {
                reviewId: post?.id,
                wineContent: post?.content,
                wineName: post?.wine.name
            }
        )
        setIsModalOpen(!isModalOpen);
    };

    const isArray = Array.isArray(data);
    return (
        <>
            {isModalOpen && (
                <Update
                    wineName={upDate.wineName}
                    reviewId={upDate.reviewId}
                    wineContent={upDate.wineContent}
                    isModalOpen={modalOpenToggle}
                ></Update>
            )}
            <div className={styled.wrap}>
                {isArray &&
                    data?.map((post) => {
                        return (
                            <div className={styled.postCon} key={post?.id}>
                                <div className={styled.leftCon}>
                                    <div className={styled.imgCon}>
                                        <img src={post?.wine.imageUrl} alt="wine-image" />
                                    </div>
                                </div>
                                <div className={styled.detailCon}>
                                    <div className={styled.infoCon}>
                                        <div key={post?.id} className={styled.list}>
                                            <p className={styled.title}>와인 :&nbsp;{post?.wine.name}</p>
                                            <p className={styled.title}>리뷰 :&nbsp;{post?.content}</p>
                                        </div>
                                        <div className={styled.buttonCon}>
                                            <button
                                                className={styled.postingBtn}
                                                onClick={() => modalOpenToggle(post)}
                                            >
                                                수정하기
                                            </button>
                                            <button
                                                className={styled.postingBtn}
                                                onClick={() => clickRemoveHandler(post?.id)}
                                            >
                                                삭제하기
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </>
    );
}

export default MyPageReviewList;
