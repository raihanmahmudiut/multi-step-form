import React from "react";
import { Link } from "react-router-dom";
import Button from "./button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Step3() {
	// Schema for Yup validation
	const validationSchema = Yup.object().shape({
		addons: Yup.array().required("Please select at least one addon"),
	});

	// Retrieve form values from localStorage for pre-filling
	const initialValues = JSON.parse(localStorage.getItem("step3FormData")) || {
		addons: [],
	};

	// Handle form submission
	const handleSubmit = (values) => {
		// Store form values in localStorage
		localStorage.setItem("step3FormData", JSON.stringify(values));
	};

	return (
		<div className="font-ubuntu h-full flex flex-col justify-between w-full">
			{/* Formik form */}
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
				className="font-ubuntu h-full w-full"
			>
				{(formik) => (
					<Form className="flex flex-col justify-between h-full w-full">
						<div className="w-full">
							<h1 className="text-2xl text-marineBlue font-bold mb-3">
								Pick add-ons
							</h1>
							<h2 className="text-md text-coolGray font-semibold mb-3">
								Add-ons help enhance your gaming experience
							</h2>
							<div className="mb-4 flex flex-row w-full justify-between">
								<label className="block text-gray-700 text-sm font-bold mb-2">
									<Field type="checkbox" name="addons" value="onlineService" />
									Online Service
								</label>
								<p className="text-black">+ $1/mo</p>
							</div>
							<div className="mb-4 flex flex-row w-full justify-between">
								<label className="block text-gray-700 text-sm font-bold mb-2">
									<Field type="checkbox" name="addons" value="largerStorage" />
									Larger Storage
								</label>
								<p className="text-black">+ $2/mo</p>
							</div>
							<div className="mb-4 flex flex-row w-full justify-between">
								<label className="block text-gray-700 text-sm font-bold mb-2">
									<Field
										type="checkbox"
										name="addons"
										value="customizableProfile"
									/>
									Customizable Profile
								</label>
								<p className="text-black">+ $2/mo</p>
							</div>
							<div className="text-red-500 text-sm">
								<ErrorMessage name="addons" />
							</div>
						</div>
						<div className="flex justify-between">
							<Link to="/step2">
								<button className="text-marineBlue font-bold py-2 px-4 rounded mr-4 focus:outline-none focus:shadow-outline">
									Go Back
								</button>
							</Link>
							<Link to="/step4">
								<Button>Next Step</Button>
							</Link>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default Step3;
