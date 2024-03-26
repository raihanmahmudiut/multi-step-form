import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Button from "./button";
import { BiReset } from "react-icons/bi";

function Sidebar() {
	const location = useLocation();

	const handleReset = () => {
		localStorage.removeItem("step1FormData");
		localStorage.removeItem("step2FormData");
		localStorage.removeItem("step3FormData");
	};

	return (
		<div className="font-ubuntu w-full lg:p-8 flex flex-row items-center xl:items-start xl:flex-col bg-mobile xl:bg-desktop bg-cover h-[200px] xl:h-[35rem] gap-4 justify-center xl:justify-start">
			<div className="flex flex-row items-center gap-4">
				<NavLink
					to="/"
					className={` border-2 border-white-300 flex flex-col items-center justify-center  w-12 h-12 rounded-full text-center ${
						location.pathname === "/" ? "bg-lightBlue" : "bg-transparent"
					} ${location.pathname === "/" ? "text-black" : "text-white"}`}
				>
					<div className="font-bold text-xl">1</div>
				</NavLink>{" "}
				<div className="hidden xl:block text-coolGray font-bold">
					{" "}
					STEP 1<br /> <span className="text-white font-bold ">YOUR INFO</span>
				</div>
			</div>

			<div className="flex flex-row items-center gap-4">
				<NavLink
					to="/step2"
					className={` border-2 border-white-300 flex flex-col items-center justify-center  w-12 h-12 rounded-full text-center ${
						location.pathname === "/step2" ? "bg-lightBlue" : "bg-transparent"
					} ${location.pathname === "/step2" ? "text-black" : "text-white"}`}
				>
					<div className="font-bold text-xl">2</div>
				</NavLink>{" "}
				<div className="hidden xl:block text-coolGray font-bold">
					STEP 2<br /> <span className="text-white font-bold">SELECT PLAN</span>
				</div>
			</div>

			<div className="flex flex-row items-center gap-4">
				<NavLink
					to="/step3"
					className={` border-2 border-white-300 flex flex-col items-center justify-center  w-12 h-12 rounded-full text-center ${
						location.pathname === "/step3" ? "bg-lightBlue" : "bg-transparent"
					} ${location.pathname === "/step3" ? "text-black" : "text-white"}`}
				>
					<div className="font-bold text-xl">3</div>
				</NavLink>{" "}
				<div className="hidden xl:block text-coolGray font-bold">
					STEP 3<br /> <span className="text-white font-bold">ADD-ONS</span>
				</div>
			</div>

			<div className="flex flex-row items-center gap-4">
				<NavLink
					to="/step4"
					className={` border-2 border-white-300 flex flex-col items-center justify-center w-12 h-12 rounded-full text-center ${
						location.pathname === "/step4" ? "bg-lightBlue" : "bg-transparent"
					} ${location.pathname === "/step4" ? "text-black" : "text-white"}`}
				>
					<div className="font-bold text-xl">4</div>
				</NavLink>{" "}
				<div className="hidden xl:block text-coolGray font-bold">
					STEP 4<br /> <span className="text-white font-bold">SUMMARY</span>
				</div>
			</div>

			<div>
				<Button
					classNameExtra="rounded-full w-10 h-10 xl:w-full gap-4 xl:h-fit flex flex-row items-center justify-center"
					onClick={() => handleReset()}
				>
					<span className="hidden xl:block">Reset Data</span>
					<span>
						<BiReset className="w-8 h-8" />
					</span>
				</Button>
			</div>
		</div>
	);
}

export default Sidebar;
