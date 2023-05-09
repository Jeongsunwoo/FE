import React from "react";
import styled from "../styles/css/myPageReviewList.module.css";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getMyPageUser, removeUserReview } from "../apis/mypage";

function MyPageReviewList() {

    const { data } = useQuery("mypageuser", getMyPageUser)
    console.log("받아온값 2222///",data)

    const queryClient = useQueryClient()

    const deleteTodomutation = useMutation(removeUserReview, {
      onSuccess: () => {
        queryClient.invalidateQueries("mypageuser")
      }
    })

    const clickRemoveHandler = (id) => {
        deleteTodomutation.mutate(id)
      };

    return (
        <div className={styled.wrap}>
            {data?.map((post) => {
                return (
                    <div className={styled.postingCon} key={post.id}>
                        <div className={styled.imgCon}>
                            <img src={post.imageUrl} alt="wine-image" />
                            <p>{post.country}</p>
                        </div>
                        <div className={styled.infoCon}>
                            <div key={post.id} className={styled.list}>
                                <p className={styled.data}>{post.content}</p>
                            </div>
                        </div>
                        <button className={styled.postingBtn}>수정하기</button>
                        <button className={styled.postingBtn} onClick={()=>clickRemoveHandler(post.id)}>삭제하기</button>
                    </div>
                );
            })}
        </div>
    )
}

export default MyPageReviewList;
