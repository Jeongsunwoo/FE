import styled from "../styles/css/wineListPage.module.css";
import SearchBar from "../components/SearchBar";
import WineList from "../components/WineList";
import { useQuery } from "react-query";
import { wineListAxios } from "../apis/wineList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onFetchWineList } from "../redux/modules/wineListSlice";

function WineListPage() {
  const { data } = useQuery("wine", wineListAxios); // 3
  const dispatch = useDispatch();

  const fetchWineList = () => {
    dispatch(onFetchWineList(data));
  };

  const wineList = useSelector((state) => state.wineListSlice.wineList);

  useEffect(() => {
    fetchWineList();
  }, [data]);

  return (
    <>
      {/* <header>임시 헤더</header> */}
      <div className={styled.wrap}>
        {/* <div className={styled.banner}>임시 배너</div> */}
        <SearchBar></SearchBar>
        <WineList wineList={wineList}></WineList>
      </div>
    </>
  );
}

export default WineListPage;
