import React from "react";
import { Outlet } from "react-router-dom";
import styled from "../styles/css/accountFrom.module.css";

function AccountPage() {
  return (
    <>
      <div className={styled.outCon}>
        <div className={styled.modalCon}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default AccountPage;
