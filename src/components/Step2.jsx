import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Button from "./button";
import { Link, useNavigate } from "react-router-dom";

import Arcade from "../assets/images/icon-arcade.svg";
import Advanced from "../assets/images/icon-advanced.svg";
import Pro from "../assets/images/icon-pro.svg";

function Step2() {
	const navigate = useNavigate();
	const cardData = [
		{
			id: 1,
			icon: Arcade,
			label: "Arcade",
			monthly: 9,
			yearly: 90,
		},
		{
			id: 2,
			icon: Advanced,
			label: "Advanced",
			monthly: 12,
			yearly: 120,
		},
		{
			id: 3,
			icon: Pro,
			label: "Pro",
			monthly: 15,
			yearly: 150,
		},
	];
	// Schema for Yup validation
	const validationSchema = Yup.object().shape({
		plan: Yup.string().required("Please select a plan"),
	});

	// Handle form submission

	const [formData, setFormData] = useState();

	const [initialValues, setInitialValues] = useState({
		plan: "",
	});

	useEffect(() => {
		if (formData && formData.plan) {
			const radioInput = document.querySelector(
				`input[value="${formData.plan}"]`
			);
			if (radioInput) {
				radioInput.checked = true;
			}
			setInitialValues({ plan: formData.plan });
		}
	}, [formData]);

	const [selectedPlan, setSelectedPlan] = useState("");

	useEffect(() => {
		const storedData = localStorage.getItem("step2FormData");
		setSelectedPlan(JSON.parse(storedData));
	}, []);

	const handleSubmit = () => {
		// Store form values in localStorage
		localStorage.setItem("step2FormData", JSON.stringify(selectedPlan));
		navigate("/step3");
	};

	const [isMonthly, setIsMonthly] = useState(true);

	const handleSelectedPlan = (selectedPlan) => {
		setSelectedPlan({
			id: selectedPlan.id,
			label: selectedPlan.label,
			cost: isMonthly ? selectedPlan.monthly : selectedPlan.yearly,
			period: isMonthly ? "Monthly" : "Yearly",
		});
	};

	const handleCheckboxChange = () => {
		setIsMonthly(!isMonthly);
	};
	return (
		<div className="flex flex-col justify-center items-center w-full h-full mt-6">
			<div className="font-ubuntu flex flex-col justify-between h-full lg:w-4/5 w-full">
				<div className="flex flex-col gap-8  justify-center h-full">
					<header>
						<h1 className="text-marineBlue font-bold text-2xl">
							Select your plan
						</h1>

						<h2 className="font-medium text-md text-coolGray">
							You have the option of monthly or yearly billing.
						</h2>
					</header>
					<div className="text-black flex flex-col lg:flex-row gap-4 lg:justify-center items-center">
						{cardData.map((card, i) => (
							<div
								key={card.id}
								onClick={() => handleSelectedPlan(card)}
								className={`${
									selectedPlan?.label === card.label
										? "bg-magnolia border-purplishBlue "
										: "bg-white border-lightGray"
								} w-full  gap-6 lg:h-60 rounded-md justify-between flex flex-row lg:flex-col border-2 cursor-pointer p-4`}
							>
								<img src={card.icon} alt="icon" className="w-12 h-12" />
								<div className="w-full">
									<div className="text-marineBlue font-bold text-lg">
										{card.label}
									</div>

									{isMonthly ? (
										<div className="text-coolGray text-md">
											${card.monthly}/mo
										</div>
									) : (
										<div className="flex flex-col gap-2 justify-start text-coolGray text-md">
											${card.yearly}/yr{" "}
											<span className="text-marineBlue text-sm">
												2 Months Free
											</span>
										</div>
									)}
								</div>
							</div>
						))}
					</div>
					<div className="bg-magnolia rounded-md h-10 w-full flex justify-center item-center mb-10">
						<label className="autoSaverSwitch relative inline-flex cursor-pointer select-none items-center">
							<input
								type="checkbox"
								name="autoSaver"
								className="sr-only"
								checked={isMonthly}
								onChange={handleCheckboxChange}
							/>
							<span
								className={`${isMonthly ? "text-marineBlue" : "text-coolGray"}`}
							>
								{" "}
								Monthly{" "}
							</span>
							<span className="slider mx-3 flex h-[26px] w-[50px] items-center rounded-full p-1 duration-200 bg-marineBlue">
								<span
									className={`dot h-[18px] w-[18px] rounded-full bg-white duration-200 ${
										!isMonthly ? "translate-x-6" : ""
									}`}
								></span>
							</span>

							<span
								className={`${
									!isMonthly ? "text-marineBlue" : "text-coolGray"
								}`}
							>
								{" "}
								Yearly{" "}
							</span>
						</label>
					</div>
				</div>
				<div className="flex justify-between absolute lg:static z-99 bottom-[-10rem] right-[-1rem] bg-white lg:bg-transparent w-screen h-16 items-center px-2 lg:w-full">
					<button
						className="text-marineBlue font-bold py-2 px-4 rounded mr-4 focus:outline-none focus:shadow-outline"
						onClick={() => navigate("/")}
					>
						Go Back
					</button>

					<Button type="submit" onClick={handleSubmit}>
						Next Step
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Step2;

{
	/* <Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
        onSubmit={handleSubmit}
        className="font-ubuntu h-full"
				>
					{({ values, handleChange }) => (
						<Form className="h-full">
							<div className="h-full flex flex-col justify-between">
								<div>
									<h2 className="text-lg font-semibold mb-3 text-black">
										Select your plan
									</h2>
									<label className="block text-gray-700 text-sm font-bold mb-2">
										Arcade
										<input
											name="plan"
											type="radio"
											value="arcade"
											onChange={handleChange}
										/>
									</label>
									<label className="block text-gray-700 text-sm font-bold mb-2">
										Advanced
										<input
											name="plan"
											type="radio"
											value="advanced"
											onChange={handleChange}
										/>
									</label>
									<label className="block text-gray-700 text-sm font-bold mb-2">
										Pro
										<input
											name="plan"
											type="radio"
											value="pro"
											onChange={handleChange}
										/>
									</label>
              </div>
              
              

              <div className="flex justify-between mt-5">
              <Link to="/">
								<button className="text-marineBlue font-bold py-2 px-4 rounded mr-4 focus:outline-none focus:shadow-outline">
									Go Back
								</button>
							</Link>
									<Link to="/step3">
										<Button type="submit">Next Step</Button>
									</Link>
								</div>
							</div>
						</Form>
					)}
				</Formik> */
}
