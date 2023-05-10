import React from "react";
import styled from "../styles/css/homePage.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";
import { useQuery } from "react-query";
import { rankingListAxios } from "../apis/wineList";
import RankingPost from "../components/RankingPost";

function HomePage() {
  const [isOpenToggle, setIsOpenToggle] = useState(false);
  const { data } = useQuery("rank", rankingListAxios);

  return (
    <div className={styled.wrap}>
      <div className={styled.innerCon}>
        <div className={styled.sideMenu}></div>
        <div className={styled.leftCon}>
          <div className={styled.contents}>
            <h1 className={styled.title}>
              Wine is the best gift from God. <br /> You can always <br />
              enjoy it.
            </h1>
            <p>
              It has a red color, smells of ripe fruit, and the tannin of the
              classic Cabernet Sauvignon gives an elegant texture. It is a wine
              that can be aged in French oak and have a great end taste.
            </p>
            <Link to="/wineList" className={styled.link}>
              Let's go leave a review
            </Link>
          </div>
        </div>
        <div className={styled.wineImgCon}></div>
        <div className={styled.bubbleImgCon}></div>
        <div
          style={isOpenToggle ? { bottom: "47%" } : null}
          className={styled.rankingCon}
        >
          <div className={styled.toggle}>
            <button onClick={() => setIsOpenToggle(!isOpenToggle)}>
              <IoChevronDownSharp />
              &nbsp; BEST 와인 랭킹순위 보기
            </button>
          </div>
          <div className={styled.rankingList}>
            {data?.map((post) => {
              return <RankingPost key={post.id} post={post}></RankingPost>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
