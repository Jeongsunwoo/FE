import React, { useState } from "react";
import styled from "../styles/css/myPageReviewList.module.css";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getMyPageReviewUser, removeUserReview } from "../apis/mypage";
import Update from "./Update";

function MyPageReviewList() {

    const queryClient = useQueryClient()

    const { data } = useQuery("mypageuser", getMyPageReviewUser)
    
    const deletemutation = useMutation(removeUserReview, {
        onSuccess: () => {
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
        <>{isModalOpen && (
            <Update
                wineId={data?.wine.id}
                wineContent={data?.content}
                isModalOpen={modalOpenToggle}
            ></Update>
        )}
            <div className={styled.wrap}>
                {data?.map((post) => {
                    return (
                        <div className={styled.postingCon} key={post.id}>
                            <div className={styled.imgCon}>
                                <img src={post.wine.imageUrl} alt="wine-image" />
                            </div>
                            <div className={styled.infoCon}>
                                <div key={post.id} className={styled.list}>
                                <p className={styled.data}>{post.wine.name}</p>
                                    <p className={styled.data}>{post.content}</p>
                                </div>
                            </div>
                            <button className={styled.postingBtn}>수정하기</button>
                            <button className={styled.postingBtn} onClick={() => clickRemoveHandler(post.wine.id)}>삭제하기</button>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default MyPageReviewList;
