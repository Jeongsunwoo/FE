import React from 'react'
import styled from "../styles/css/header.module.css";
import { FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Header() {

    return (
        <header className={styled.header}>
            <button type="button" className={styled.headerLogo} onClick={() => { console.log("Home 페이지로") }}>
                <h1 className={styled.headerFont}>WeLuvWine</h1>
            </button>
            <div className={styled.buttonContainer}>
                <Link type="button" className={styled.iconLogin} to={"/account/login"}>Login</Link>
                <Link type="button" className={styled.iconmyPage} to={`/mypage`}><FaRegUser /></Link>
            </div>
        </header>
    )
}

export default Header