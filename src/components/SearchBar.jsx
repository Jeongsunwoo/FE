import styled from "../styles/css/searchBar.module.css";
import { BiSearch } from "react-icons/bi";
import useInput from "../hooks/useInput";
import { useQuery } from "react-query";
import { searchWineListAxios } from "../apis/wineList";

function SearchBar({ setWineList }) {
  const initialState = "";
  const [searchValue, handleInputChange, reset] = useInput(initialState);

  const { data, refetch } = useQuery(
    "search",
    async () => {
      return await searchWineListAxios({ searchKeyword: searchValue });
    },
    { enabled: false }
  );

  const handleSearchBtn = () => {
    if (!searchValue) {
      alert("검색어를 입력해주세요");
      return;
    }
    refetch();
    setWineList(data);
    reset();
  };

  return (
    <div className={styled.searchCon}>
      <div className={styled.searchBar}>
        <input
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          required
        />
        <div className={styled.buttonCon}>
          <button className={styled.searchBtn} onClick={handleSearchBtn}>
            <BiSearch style={{ color: "white" }} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
