import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function Layout() {
	return (
		<div className="flex bg-white w-full justify-center items-center">
			<Sidebar />
			<Outlet />
		</div>
	);
}

export default Layout;
