import styled from "../styles/css/wineListPage.module.css";
import SearchBar from "../components/SearchBar";
import WineList from "../components/WineList";
import { useQuery } from "react-query";
import { wineListAxios } from "../apis/wineList";
import { useEffect, useState } from "react";
import Error from "../components/Error";

function WineListPage() {
  const { isError, data } = useQuery("wine", wineListAxios);
  const [wineList, setWineList] = useState(data);
  useEffect(() => {
    setWineList(data);
  }, [data]);

  return (
    <>
      <div className={styled.wrap}>
        <SearchBar setWineList={setWineList}></SearchBar>
        {!data && <Error isError={isError}></Error>}
        <WineList wineList={wineList}></WineList>
      </div>
    </>
  );
}

export default WineListPage;
