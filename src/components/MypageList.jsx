import React from 'react'
import styled from "../styles/css/myPageList.module.css";


function MypageList() {

    const post = {
            memberId: "Jeong sun woo",
            password: "12345",
            nickname: "12345",
            id: "g-2Ff1z",
            image_url:
                "http://www.wineok.com/files/thumbnails/470/256/170x240.ratio.jpg"
    }

    return (
        <>
            <div className={styled.line}></div>
            <div className={styled.listCon}>
                <div className={styled.postCon}>
                    <div className={styled.leftCon}>
                        <div className={styled.imgCon}>
                            <img src={post.image_url} alt="wine-image" />
                        </div>
                    </div>
                    <div className={styled.detailCon}>
                        <h3 className={`${styled.data} ${styled.name}`}>{post.memberId} 님의 마이페이지</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MypageList
