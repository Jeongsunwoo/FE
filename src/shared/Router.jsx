import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AccountPage from "../pages/AccountPage";
import Login from "../components/Login";
import Signup from "../components/Signup";
import WineListPage from "../pages/WineListPage";
import DetailPage from "../pages/DetailPage";
import Footer from "../components/Footer";
import styled from "../styles/css/app.module.css";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/account" element={<AccountPage />}>
          <Route path="/account/login" element={<Login />}></Route>
          {/* <Route path="/account/signup" element={<Signup />}></Route> */}
        </Route>
        <Route path="/wineList" element={<WineListPage />}></Route>
        <Route path="/wineList/:id" element={<DetailPage />}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default Router;
