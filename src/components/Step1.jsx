import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "./button";

function Step1() {
	
	const validationSchema = Yup.object().shape({
		name: Yup.string().required("Name is required"),
		email: Yup.string().email("Invalid email").required("Email is required"),
		phone: Yup.string().required("Phone number is required"),
	});

	const [formData, setFormData] = useState(
		{
			name: "",
			email: "",
			phone: "",
		}
	)


	useEffect(() => {
		const storedData = localStorage.getItem("step1FormData");
		if (storedData) {
			setFormData(JSON.parse(storedData)); // Update state only if data exists
		}
		
		
	}, []); // Empty dependency array to run only once after mount

	
	const initialValues = {
		name: formData.name || "",
		email: formData.email || "",
        phone: formData.phone || "",
	};
	
	
	// Handle form submission
	const handleSubmit = (values) => {
		localStorage.setItem("step1FormData", JSON.stringify(values));
		
	};

	return (
		<div className="font-ubuntu h-full flex flex-col justify-between">
			<div>
				<header className="flex flex-col gap-2">
					<h1 className="font-bold text-2xl text-marineBlue">Personal info</h1>
					<h2 className="font-medium text-md text-coolGray">
						Please provide your name, email address, and phone number.
					</h2>
				</header>

				{/* Formik form */}
				<Formik
					initialValues={initialValues} // Use state for initial values
					validationSchema={validationSchema}
					onSubmit={handleSubmit}
				>
					{(formik) => (
						<Form className="flex flex-col justify-between h-full">
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
									value={initialValues.name}
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
									value= {initialValues.email}
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
									value= {initialValues.phone}
									placeholder="e.g. +1 234 567 890"
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								/>
								<ErrorMessage
									name="phone"
									component="div"
									className="text-red-500 text-sm"
								/>
							</div>
							<div className="flex justify-end">
								<Link to="/step2">
								<Button>Next Step</Button>
								</Link>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
}

export default Step1;
