import React from "react";
import styled from "../styles/css/myPageList.module.css";
import { useQuery } from "react-query";
import { getMyPageUserInfo } from "../apis/mypage";

function MypageUserInfo() {
  const { data } = useQuery("mypageuser", getMyPageUserInfo);

  return (
    <>
      <div className={styled.line}></div>
      <div className={styled.listCon}>
        <div className={styled.postCon}>
          <div className={styled.leftCon}>
            <div className={styled.imgCon}>
              <img
                src={
                  "https://www.omynara.com/wp-content/uploads/2018/02/wine-1543170_640.jpg"
                }
                alt="wine-image"
              />
            </div>
          </div>
          <div className={styled.detailCon}>
            <h3 className={`${styled.data} ${styled.name}`}>
              {data && `${data[0].member.nickname}`}님의 마이페이지
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default MypageUserInfo;
