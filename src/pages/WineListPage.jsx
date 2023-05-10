import styled from "../styles/css/wineListPage.module.css";
import SearchBar from "../components/SearchBar";
import WineList from "../components/WineList";
import { useQuery } from "react-query";
import { wineListAxios } from "../apis/wineList";
import { useEffect, useState } from "react";
import Error from "../components/Error";
import { notLoginRouting } from "../apis/auth/checkingLogin";
import { useNavigate } from "react-router-dom";

function WineListPage() {
  const navigate = useNavigate();
  const { isError, data } = useQuery("wine", wineListAxios);
  const [wineList, setWineList] = useState(data);

  useEffect(() => {
    notLoginRouting(navigate);
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
