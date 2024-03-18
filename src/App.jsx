import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";

function App() {
	return (
		<div className=" w-full h-3/5 flex justify-center items-center z-9 ">
			<div className="bg-white relative w-4/5 lg:w-3/5 flex flex-col lg:flex-row justify-center items-center px-4">
				<div className="absolute lg:static top-0 z-10">
					<Layout />
				</div>
				<div className="absolute lg:static top-32 z-50 bg-white rounded-md  px-6 py-2 w-full lg:h-[32rem] shadow-lg lg:shadow-none">
					<Card />
				</div>
			</div>
		</div>
	);
}

export default App;

function Card() {
	return (
		<Routes>
			<Route path="/" element={<Step1 />} />
			<Route path="/step2" element={<Step2 />} />
			<Route path="/step3" element={<Step3 />} />
			<Route path="/step4" element={<Step4 />} />
			<Route path="/step5" element={<Step5 />} />
		</Routes>
	);
}
