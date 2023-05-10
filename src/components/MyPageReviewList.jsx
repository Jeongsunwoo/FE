import React, { useState } from "react";
import styled from "../styles/css/myPageReviewList.module.css";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getMyPageUserInfo, removeUserReview } from "../apis/mypage";
import Update from "./Update";

function MyPageReviewList() {
    
    const queryClient = useQueryClient();

    const { data } = useQuery("mypageuser", getMyPageUserInfo)

    const deletemutation = useMutation(removeUserReview, {
        onSuccess: () => {
            alert("삭제완료!")
            queryClient.invalidateQueries("mypageuser")
        }
    })

    const clickRemoveHandler = (id) => {
        deletemutation.mutate(id)
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalOpenToggle = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <div className={styled.wrap}>
                {data?.map((post) => {
                    return (
                        <div className={styled.postingCon} key={post.id}>
                            <div className={styled.imgCon}>
                                <img src={post.wine.imageUrl} alt="wine-image" />
                            </div>
                            <div className={styled.infoCon}>
                                <div key={post.id} className={styled.list}>
                                    <p className={styled.data}>Wine : {post.wine.name}</p>
                                    <p className={styled.data}>My Review : {post.content}</p>
                                </div>
                            </div>
                            <button className={styled.postingBtn} onClick={() => modalOpenToggle()}>수정하기</button>
                            <button className={styled.postingBtn} onClick={() => clickRemoveHandler(post.id)}>삭제하기</button>
                            {isModalOpen && (
                                <Update
                                    reviewId={post?.id}
                                    wineName={post?.wine.name}
                                    wineContent={post?.content}
                                    isModalOpen={modalOpenToggle}
                                ></Update>
                            )}
                        </div>

                    );
                })}
            </div>
        </>
    )
}

export default MyPageReviewList;
