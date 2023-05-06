import React from "react";
import styled from "../styles/css/wineList.module.css";
import WinePost from "./WinePost";

function WineList() {
  const array = [
    {
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
    },
    {
      name: "2013 데스끌랑 라 뿔 블랑쉬",
      vintage: "2013",
      country: "France (프랑스) > Provence (프로방스)",
      winery: "D’Esclans / 데스끌랑",
      type: "White Wine / 화이트 와인",
      grape: "Chardonnay / 샤도네/샤르도네",
      image_url:
        "http://www.wineok.com/files/thumbnails/450/256/170x240.ratio.jpg",
      information:
        "“르 꼬끄, Le Coq”는 “수탉”이라는 뜻의 프랑스어로 프랑스를 상징하는 동물이다. 까브 데스끌랑의 오너, 사샤 리쉰은 뛰어난 품질을 가진 프랑스 와인의 모델을 보여주고자 현대 양조학과 프랑스 최고의 노하우의 접목을 통해 완성되었다. 기존의 까브 데스끌랑의 팬들을 위하여 새로이 창조된 ‘치킨 레인지’는 출시와 동시에 좋은 품질로 ‘솔드 아웃’을 일으킨 데스끌랑의 새로운 야심작이다. 화이트 와인 “라 뿔 블랑쉬, La Poule Blanche”는 흰 암탉이라는 뜻으로 프랑스 남부의 강렬한 햇살에서 자란 포도로 만들어진다.",
      recommend_count: 0,
    },
    {
      name: "2012 도멘 진트 훔브레히트 진트 훔브레이트 피노 블랑",
      vintage: "2012",
      country: "France (프랑스) > Alsace (알자스)",
      winery: "Domaine Zind-Humbrecht / 도멘 진트 훔브레히트",
      type: "White Wine / 화이트 와인",
      grape: "Pinot Blanc / 피노 블랑",
      image_url:
        "http://www.wineok.com/files/thumbnails/446/256/170x240.ratio.jpg",
      information:
        "도메인 진트 훔브레이트는 유럽의 30년 전쟁 시대(1620년)때부터 Humbrecht 가족에 의해 와인 양조 시작하였으며, 현재의 도메인 진트 훔브레이트는 1959년 Zenon Humbrecht에 의해 설립되었다. 오너인 Olivier Humbrecht는 첫 번째 프랑스 출신 Master of Wine 자격을 취득하였으며, 그 품질과 명성은 알자스 지방의 와인들 중에서 최고로 불리어 지고 있다. 이 와인의 두 품종인 피노블랑과 옥세루아는 Herrenweg 빈야드와 Rotenberg 빈야드에서 재배된 두 가지 품종을 블렌딩 한 제품으로 알자스 지방의 전통적 블렌딩 방식으로 제조되었다. Wine Spectator 2011 88점 Robert Parker 2010 88점",
      recommend_count: 0,
    },
    {
      name: "2011 도멘 진트 훔브레히트 진트 훔브레이트 게뷔르츠트라미너 투르크하임",
      vintage: "2011",
      country: "France (프랑스) > Alsace (알자스)",
      winery: "Domaine Zind-Humbrecht / 도멘 진트 훔브레히트",
      type: "White Wine / 화이트 와인",
      grape: "Gewurztraminer / 게부르츠트라미너",
      image_url:
        "http://www.wineok.com/files/thumbnails/442/256/170x240.ratio.jpg",
      information:
        "도메인 진트 훔브레이트는 유럽의 30년 전쟁 시대(1620년)때부터 Humbrecht 가족에 의해 와인 양조 시작하였으며, 현재의 도메인 진트 훔브레이트는 1959년 Zenon Humbrecht에 의해 설립되었다. 오너인 Olivier Humbrecht는 첫 번째 프랑스 출신 Master of Wine 자격을 취득하였으며, 그 품질과 명성은 알자스 지방의 와인들 중에서 최고로 불리어 지고 있다. 진트 훔브레이트 게뷔르츠트라미너 투르크하임의 진트 훔브레이트의 대표 품종인 게뷔르츠트라미너 100%로 만들어 졌으며, 평균 포도나무 수령은 38년으로 알려져 있다. RP 89(2006) WS 92(2011, 2007, WE 90(2007)",
      recommend_count: 0,
    },
    {
      name: "2011 도멘 진트 훔브레히트 진트 훔브레이트 진트",
      vintage: "2011",
      country: "France (프랑스) > Alsace (알자스)",
      winery: "Domaine Zind-Humbrecht / 도멘 진트 훔브레히트",
      type: "White Wine / 화이트 와인",
      grape: "Chardonnay / 샤도네/샤르도네",
      image_url:
        "http://www.wineok.com/files/thumbnails/438/256/170x240.ratio.jpg",
      information:
        "도메인 진트 훔브레이트는 유럽의 30년 전쟁 시대(1620년)때부터 Humbrecht 가족에 의해 와인 양조 시작하였으며, 현재의 도메인 진트 훔브레이트는 1959년 Zenon Humbrecht에 의해 설립되었다. 오너인 Olivier Humbrecht는 첫 번째 프랑스 출신 Master of Wine 자격을 취득하였으며, 그 품질과 명성은 알자스 지방의 와인들 중에서 최고로 불리어 지고 있다. 진트 훔브레이트 진트는 Hunawihr에 위치한 Clos Windsbuhl 빈야드에서 재배된 Chardonnay와 Auxerrois로 블렌딩 되어 만들어 졌으며, 평균 포도나무 수령은 22년으로 알려져 있다. Robert Parker 2007 90점 Wine Spectator 2007 88점",
      recommend_count: 0,
    },
  ];
  return (
    <div className={styled.listCon}>
      {array.map((post) => {
        return (
          <div className={styled.list}>
            <WinePost searchActive={true} post={post}></WinePost>
          </div>
        );
      })}
    </div>
  );
}

export default WineList;
