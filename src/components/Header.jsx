import React from "react";
import styled from "../styles/css/header.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isLogin } from "../redux/modules/loginSlice";
import { useMutation } from "react-query";
import { logoutAxios } from "../apis/auth/login";
import { checkingLogin } from "../apis/auth/checkingLogin";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mutation = useMutation(logoutAxios, {});
  const login = checkingLogin();

  const handleClickLogout = () => {
    mutation.mutate();
    sessionStorage.removeItem("AccessToken");
    dispatch(isLogin(false));
    alert("로그아웃 처리 되었습니다.");
    navigate("/account/login");
  };

  return (
    <header>
      <nav>
        <Link to="/">
          <h1 className={styled.headerFont}>WeLuvWine</h1>
        </Link>
        {login ? (
          <>
            <div className={styled.loginCon}>
              <button
                className={styled.wineListBtn}
                onClick={() => {
                  navigate("/wineList");
                }}
              >
                SEARCH PAGE
              </button>
              <button
                className={styled.myPageBtn}
                onClick={() => {
                  navigate("/mypage");
                }}
              >
                MY PAGE
              </button>
              <button className={styled.logoutBtn} onClick={handleClickLogout}>
                LOGOUT
              </button>
            </div>
          </>
        ) : (
          <>
            <div className={styled.logoutCon}>
              <button
                className={styled.loginBtn}
                onClick={() => {
                  navigate("/account/login");
                }}
              >
                LOGIN
              </button>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
