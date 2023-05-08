import styled from "../styles/css/wineListPage.module.css";
import SearchBar from "../components/SearchBar";
import WineList from "../components/WineList";
import { useQuery } from "react-query";
import { wineListAxios } from "../apis/wineList";
import { useEffect, useState } from "react";

function WineListPage() {
  const { data } = useQuery("wine", wineListAxios); // 3
  const [wineList, setWineList] = useState(data);

  useEffect(() => {
    setWineList(data);
  }, [data]);
  return (
    <>
      {/* <header>임시 헤더</header> */}
      <div className={styled.wrap}>
        {/* <div className={styled.banner}>임시 배너</div> */}
        <SearchBar setWineList={setWineList}></SearchBar>
        <WineList wineList={wineList}></WineList>
      </div>
    </>
  );
}

export default WineListPage;
