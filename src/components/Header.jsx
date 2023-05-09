import React from "react";
import styled from "../styles/css/header.module.css";
import { Link, useNavigate } from "react-router-dom";
import { checkingLogin, logout } from "../hooks/useCheckingLogin";

function Header() {
  const navigate = useNavigate();
  // const isLogin = checkingLogin();
  const isLogin = true;

  return (
    <header>
      <nav>
        <Link to="/">
          <h1 className={styled.headerFont}>WeLuvWine</h1>
        </Link>
        {isLogin ? (
          <div className={styled.loginCon}>
            <button
              className={styled.myPageBtn}
              onClick={() => {
                navigate("/mypage");
              }}
            >
              MY PAGE
            </button>
            <button
              className={styled.logoutBtn}
              onClick={() => {
                logout();
              }}
            >
              LOGOUT
            </button>
          </div>
        ) : (
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
        )}
      </nav>
    </header>
  );
}

export default Header;
