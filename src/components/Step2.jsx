import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Button from "./button";
import { Link, useNavigate } from "react-router-dom";

function Step2() {

	const navigate = useNavigate()
	const cardData = [
		{
			icon: "icon-arcade",
			label: "Arcade",
			monthly: 9,
			yearly: 90,
		},
		{
			icon: "icon-advanced",
			label: "Advanced",
			monthly: 12,
			yearly: 120,
		},
		{
			icon: "icon-pro",
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
	const handleSubmit = (values) => {
		// Store form values in localStorage
		localStorage.setItem("step2FormData", JSON.stringify(values));
		navigate('/step3')
	};

	const [formData, setFormData] = useState();

	useEffect(() => {
		const storedData = localStorage.getItem("step2FormData");
		setFormData(JSON.parse(storedData));
	}, []);

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

	return (
		<div className="font-ubuntu h-full">
			<div className="text-black flex flex-col lg:flex-row gap-4 h-full">
				{cardData.map((card, i) => (
					<div
						key={card.monthly + i}
						className="h-full justify-between flex flex-row lg:flex-col"
					>
						<div>{card.icon}</div>
						<div>
							<div>{card.label}</div>
							<div>{card.monthly}</div>
						</div>
					</div>
				))}
			</div>
			{/* <Formik
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
				</Formik> */}
			<div className="flex justify-between mt-5">
				
					<button className="text-marineBlue font-bold py-2 px-4 rounded mr-4 focus:outline-none focus:shadow-outline" onClick={()=> navigate("/")}>
						Go Back
					</button>
				
				
				<Button type="submit" onClick={() => navigate("/step3")}>Next Step</Button>
				
			</div>
		</div>
	);
}

export default Step2;
