import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AccountPage from "../pages/AccountPage";
import Login from "../components/Login";
import Signup from "../components/Signup";
import PostingPage from "../pages/PostingPage";
import WineListPage from "../pages/WineListPage";
import DetailPage from "../pages/DetailPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/account" element={<AccountPage />}>
          <Route path="/account/login" element={<Login />}></Route>
          <Route path="/account/signup" element={<Signup />}></Route>
        </Route>
        <Route path="/posting" element={<WineListPage />}></Route>
        <Route path="/" element={<DetailPage />}></Route>
        <Route path="/" element={<PostingPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
