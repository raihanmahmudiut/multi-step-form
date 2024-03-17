import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function Layout() {
	return (
		<div className="flex bg-white justify-center items-center lg:h-screen">
			<Sidebar />
			<Outlet />
		</div>
	);
}

export default Layout;
