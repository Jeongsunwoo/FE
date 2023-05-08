import styled from "../styles/css/searchBar.module.css";
import { BiSearch } from "react-icons/bi";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { useQuery } from "react-query";
import { searchWineListAxios } from "../apis/wineList";
import { onFetchWineList } from "../redux/modules/wineListSlice";

function SearchBar() {
  const initialState = "";
  const [searchValue, handleInputChange, reset] = useInput(initialState);

  const dispatch = useDispatch();

  const { data, refetch } = useQuery("search", async () => {
    return await searchWineListAxios(searchValue);
  });

  const handleSearchBtnClick = () => {
    refetch();
    dispatch(onFetchWineList(data));
    reset();
  };

  return (
    <div className={styled.searchCon}>
      <div className={styled.searchBar}>
        <input type="text" value={searchValue} onChange={handleInputChange} />
        <div className={styled.buttonCon}>
          <button className={styled.searchBtn} onClick={handleSearchBtnClick}>
            <BiSearch style={{ color: "white" }} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
