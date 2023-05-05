import React from "react";
import { Outlet } from "react-router-dom";

function AccountPage() {
  return (
    <div>
      AccountPage
      <Outlet />
    </div>
  );
}

export default AccountPage;
