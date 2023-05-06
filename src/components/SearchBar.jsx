import React from "react";
import styled from "../styles/css/searchBar.module.css";
import { BiSearch } from "react-icons/bi";

function SearchBar() {
  return (
    <div className={styled.searchCon}>
      <div className={styled.searchBar}>
        <input type="text" />
        <div className={styled.buttonCon}>
          <button className={styled.searchBtn}>
            <BiSearch style={{ color: "white" }} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
