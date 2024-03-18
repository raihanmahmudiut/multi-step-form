import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Button from "./button";
import { BiReset } from "react-icons/bi";

function Sidebar() {
	const location = useLocation();

	const handleReset = () => {
		localStorage.removeItem("step1FormData");
		location.removeItem("step2FormData");
		location.removeItem("step3FormData");
	};

	return (
		<div className="font-ubuntu lg:p-5 w-screen lg:w-52 flex flex-row items-center lg:items-start lg:flex-col bg-mobile lg:bg-desktop bg-cover h-[200px] lg:h-[35rem] gap-4 justify-center lg:justify-start">
			<div className="flex flex-row items-center gap-2">
				<NavLink
					to="/"
					className={` py-2 border-2 border-white-300  w-10 h-10 rounded-full text-center ${
						location.pathname === "/" ? "bg-lightBlue" : "bg-transparent"
					} ${location.pathname === "/" ? "text-black" : "text-white"}`}
				>
					<div>1</div>
				</NavLink>{" "}
				<div className="hidden lg:block text-coolGray">
					{" "}
					STEP 1<br /> <span className="text-white">YOUR INFO</span>
				</div>
			</div>

			<div className="flex flex-row items-center gap-2">
				<NavLink
					to="/step2"
					className={` py-2 border-2 border-white-300  w-10 h-10 rounded-full text-center ${
						location.pathname === "/step2" ? "bg-lightBlue" : "bg-transparent"
					} ${location.pathname === "/step2" ? "text-black" : "text-white"}`}
				>
					<div>2</div>
				</NavLink>{" "}
				<div className="hidden lg:block text-coolGray">
					STEP 2<br /> <span className="text-white">SELECT PLAN</span>
				</div>
			</div>

			<div className="flex flex-row items-center gap-2">
				<NavLink
					to="/step3"
					className={` py-2 border-2 border-white-300  w-10 h-10 rounded-full text-center ${
						location.pathname === "/step3" ? "bg-lightBlue" : "bg-transparent"
					} ${location.pathname === "/step3" ? "text-black" : "text-white"}`}
				>
					<div>3</div>
				</NavLink>{" "}
				<div className="hidden lg:block text-coolGray">
					STEP 3<br /> <span className="text-white">ADD-ONS</span>
				</div>
			</div>

			<div className="flex flex-row items-center gap-2">
				<NavLink
					to="/step4"
					className={` py-2 border-2 border-white-300 w-10 h-10 rounded-full text-center ${
						location.pathname === "/step4" ? "bg-lightBlue" : "bg-transparent"
					} ${location.pathname === "/step4" ? "text-black" : "text-white"}`}
				>
					<div>4</div>
				</NavLink>{" "}
				<div className="hidden lg:block text-coolGray">
					STEP 4<br /> <span className="text-white">SUMMARY</span>
				</div>
			</div>

			<div>
				<Button
					classNameExtra="rounded-full w-10 h-10 lg:w-full gap-2 lg:h-fit flex flex-row items-center justify-center"
					onClick={() => handleReset()}
				>
					<span className="hidden lg:block">Reset Data</span>
					<span>
						<BiReset className="w-8 h-8" />
					</span>
				</Button>
			</div>
		</div>
	);
}

export default Sidebar;
