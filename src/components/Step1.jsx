import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "./button";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
	name: Yup.string().required("Name is required"),
	email: Yup.string().email("Invalid email").required("Email is required"),
	phone: Yup.string().required("Phone number is required"),
});

function Step1() {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
	});

	useEffect(() => {
		try {
			const storedData = localStorage.getItem("step1FormData");
			if (storedData) {
				const parsedData = JSON.parse(storedData);
				setFormData(parsedData);
			}
		} catch (error) {
			console.error("Error parsing JSON from local storage:", error);
		}
	}, []);

	const handleSubmit = (values) => {
		localStorage.setItem("step1FormData", JSON.stringify(values));
		navigate("/step2");
	};

	return (
		<div className="flex flex-col justify-center items-center h-full mt-6">
			<div className="font-ubuntu flex flex-col justify-between h-full lg:w-4/5 w-full ">
				<header className="flex flex-col gap-2">
					<h1 className="font-bold text-2xl text-marineBlue">Personal info</h1>
					<h2 className="font-medium text-md text-coolGray">
						Please provide your name, email address, and phone number.
					</h2>
				</header>

				<Formik
					initialValues={formData}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}
					enableReinitialize={true}
					className="font-ubuntu h-full"
				>
					{(formik) => (
						<Form className="flex flex-col justify-between h-full relative">
							<div>
								<div className="mb-4">
									<label
										htmlFor="name"
										className="block text-gray-700 text-sm font-bold mb-2"
									>
										Name
									</label>
									<Field
										type="text"
										id="name"
										name="name"
										placeholder="e.g. Stephen King"
										className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									/>
									<ErrorMessage
										name="name"
										component="div"
										className="text-red-500 text-sm"
									/>
								</div>
								<div className="mb-4">
									<label
										htmlFor="email"
										className="block text-gray-700 text-sm font-bold mb-2"
									>
										Email Address
									</label>
									<Field
										type="email"
										id="email"
										name="email"
										placeholder="e.g. stephenking@lorem.com"
										className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									/>
									<ErrorMessage
										name="email"
										component="div"
										className="text-red-500 text-sm"
									/>
								</div>
								<div className="mb-4">
									<label
										htmlFor="phone"
										className="block text-gray-700 text-sm font-bold mb-2"
									>
										Phone Number
									</label>
									<Field
										type="tel"
										id="phone"
										name="phone"
										placeholder="e.g. +1 234 567 890"
										className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									/>
									<ErrorMessage
										name="phone"
										component="div"
										className="text-red-500 text-sm"
									/>
								</div>
							</div>
							<div className="flex justify-end absolute lg:static z-99 bottom-[-10rem] right-[-4.5rem] bg-white lg:bg-transparent w-screen h-16 items-center px-2 lg:w-full">
								<Button type="submit" classNameExtra="h-10">Next Step</Button>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
}

export default Step1;
