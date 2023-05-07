import React from "react";
import styled from "../styles/css/detailPage.module.css";
import WinePost from "../components/WinePost";
import ReviewList from "../components/ReviewList";

function DetailPage() {
  const post = {
    id: 1,
    name: "2013 산 페드로 에피카 소비뇽 블랑",
    vintage: "2013",
    country: "Chile (칠레) > Other (기타 지역)",
    winery: "San Pedro / 산 페드로",
    type: "White Wine / 화이트 와인",
    grape: "Sauvignon Blanc / 소비뇽 블랑",
    image_url:
      "http://www.wineok.com/files/thumbnails/470/256/170x240.ratio.jpg",
    information:
      "스페인어로 ‘대단한, 엄청난’(영어의 EPIC)이라는 뜻의 에피카는 젊음(young), 유쾌함(fun), 트랜디함(trendy)으로 대변되는 개성 넘치는 와인으로 국내 최고의 칠레 와이너리 산페드로사에서 새롭게 도전한 와인이다.  합리적인 가격에 최고의 퀄리티, 언제 어디서든 편하게 마실 수 있는 컨셉의 에피카는 미국을 시작으로 칠레 프리미엄 와인을 가장 사랑하는 한국에 다른 어느 국가보다 먼저 출시되었다.",
    recommend_count: 0,
  };
  return (
    <>
      <div className={styled.wrap}>
        <WinePost detailActive={true} post={post}></WinePost>
        <div className={styled.postingCon}>
          <button className={styled.postingBtn}>리뷰 작성하기</button>
        </div>
        <ReviewList></ReviewList>
      </div>
    </>
  );
}

export default DetailPage;
