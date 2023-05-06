import React from "react";
import styled from "../styles/css/wineListPage.module.css";
import SearchBar from "../components/SearchBar";
import WineList from "../components/WineList";

function WineListPage() {
  return (
    <>
      {/* <header>임시 헤더</header> */}
      <div className={styled.wrap}>
        {/* <div className={styled.banner}>임시 배너</div> */}
        <SearchBar></SearchBar>
        <WineList></WineList>
      </div>
    </>
  );
}

export default WineListPage;
