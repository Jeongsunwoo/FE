import React from "react";
import { Outlet } from "react-router-dom";
import styled from "../styles/css/accountFrom.module.css";
import Header from "../components/Header";

function AccountPage() {
	return (
		<>
			<Header />
			<div className={styled.accountfrom}>
				<div className={styled.accountLayout}>
					<div className={styled.accountContainer}>
						<div className={styled.accountBox}>
							<Outlet />
						</div>
					</div>
				</div>
			</div>
			<Outlet />
		</>
	);
}

export default AccountPage;
