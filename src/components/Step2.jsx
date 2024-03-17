import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Button from "./button";
import { Link } from "react-router-dom";

function Step2() {
	// Schema for Yup validation
	const validationSchema = Yup.object().shape({
		plan: Yup.string().required("Please select a plan"),
	});

	// Handle form submission
	const handleSubmit = (values) => {
		// Store form values in localStorage
		localStorage.setItem("step2FormData", JSON.stringify(values));
		console.log(values);
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
		<div className="font-ubuntu h-full flex flex-col justify-between">
			<div>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}
				>
					{({ values, handleChange }) => (
						<Form>
							<h2 className="text-lg font-semibold mb-3 text-black">
								Select your plan {values.plan}
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

							<div className="flex justify-end mt-5">
								<Link to="/step3">
									<Button type="submit">Next Step</Button>
								</Link>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
}

export default Step2;
