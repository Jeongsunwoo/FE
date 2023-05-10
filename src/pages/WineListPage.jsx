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
    console.log("초기값");
    notLoginRouting(navigate);
    setWineList(data);
    // 검색 후 페이지 이동시 다시 초기값으로 초기화 됨 (의존성 배열 data설정 시)
    // 마운트 시에만 초기값으로 설정되게 변경
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
