import React from "react";
import { FaUserAlt } from "react-icons/fa";
import styled from "../styles/css/myPageList.module.css";
import { useQuery } from "react-query";
import { getMyPageUserInfo } from "../apis/mypage";

function MypageUserInfo() {
  const { data } = useQuery("mypageuser", getMyPageUserInfo);
  const isArray = Array.isArray(data);

  return (
    <>
      <div className={styled.postCon}>
        <div className={styled.leftCon}>
          <div className={styled.imgCon}>
          </div>
        </div>
        <div className={styled.detailCon}>
          <h3 className={`${styled.data} ${styled.name}`}>
            {data && (isArray ? data[0].member.nickname : data.nickname)}님의
            마이페이지&nbsp;<FaUserAlt />
          </h3>
        </div>
      </div>
    </>
  );
}

export default MypageUserInfo;
