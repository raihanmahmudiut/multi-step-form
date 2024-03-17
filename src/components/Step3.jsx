import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Step3() {

	const addons = [
		{ value: "onlineService", label: "Online Service", price: "$1/mo" },
		{ value: "largerStorage", label: "Larger Storage", price: "$2/mo" },
		{ value: "customizableProfile", label: "Customizable Profile", price: "$2/mo" },
	  ];
	const navigate = useNavigate()
	const validationSchema = Yup.object().shape({
		addons: Yup.array().required("Please select at least one addon"),
	});

	console.log(JSON.parse(localStorage.getItem("step3FormData")))
	// Retrieve form values from localStorage for pre-filling
	const initialValues = JSON.parse(localStorage.getItem("step3FormData")) || {
		addons: [],
	};

	// Get selected addons from localStorage
	const selectedAddons = initialValues.addons;

	// Function to check if addon is selected
	const isAddonSelected = (addon) => {
	  return selectedAddons.includes(addon);
	};
  

	// Handle form submission
	const handleSubmit = (values) => {
		// Store form values in localStorage
		localStorage.setItem("step3FormData", JSON.stringify(values));

		navigate("/step4")
		
	};

	let tempSelectedAddons = []

	const handleChange = (values) => { 
		tempSelectedAddons = [...selectedAddons, values]
		console.log(tempSelectedAddons)
	}

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
							{addons.map((addon) => (
                <div
                  key={addon.value}
                  className={`mb-4 flex flex-row w-full justify-between ${
                    isAddonSelected(addon.value) ? "bg-yellow-200" : ""
                  } checkbox-container`}
                  data-id={addon.value}
                >
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    <Field
                      type="checkbox"
                      name="addons"
                      value={addon.value}
											className="mr-2"
											onChange={handleChange}
                    />
                    <span className="text-black">{addon.label}</span>
                  </label>
                  <p className="text-black">{addon.price}</p>
                </div>
              ))}
							<div className="text-red-500 text-sm">
								<ErrorMessage name="addons" />
							</div>
						</div>
						<div className="flex justify-between">
							
							<button className="text-marineBlue font-bold py-2 px-4 rounded mr-4 focus:outline-none focus:shadow-outline" onClick={() => navigate("/step2")}>
									Go Back
								</button>
							
							
								<Button>Next Step</Button>
							
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default Step3;
