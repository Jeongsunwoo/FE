import React from "react";
import styled from "../styles/css/wineList.module.css";
import WinePost from "./WinePost";

function WineList({ wineList }) {
  return (
    <>
      <div className={styled.line}></div>
      <div className={styled.listCon}>
        {wineList?.map((post) => {
          return (
            <div key={post.id} className={styled.list}>
              <WinePost detailActive={false} post={post}></WinePost>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default WineList;
