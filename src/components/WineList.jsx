import React from "react";
import styled from "../styles/css/wineList.module.css";
import WinePost from "./WinePost";

function WineList({ wineList }) {
  return (
    <>
      <div className={styled.line}></div>
      <div className={styled.listCon}>
        {wineList ? (
          wineList?.map((post) => {
            return (
              <div key={post.id} className={styled.list}>
                <WinePost detailActive={false} post={post}></WinePost>
              </div>
            );
          })
        ) : (
          <div className={styled.error}> ❗검색 결과가 없습니다.</div>
        )}
      </div>
    </>
  );
}

export default WineList;
