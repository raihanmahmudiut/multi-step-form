import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./button";
import * as Yup from "yup";

function Step3() {
	const addons = [
		{
			id: 1,
			value: "onlineService",
			tag: "Access to multiplayer games",
			label: "Online Service",
			price: 1,
		},
		{
			id: 2,
			value: "largerStorage",
			tag: "Extra 1TB of cloud save",
			label: "Larger Storage",
			price: 2,
		},
		{
			id: 3,
			value: "customizableProfile",

			tag: "Custom theme on your profile",
			label: "Customizable Profile",
			price: 2,
		},
	];
	const navigate = useNavigate();
	const validationSchema = Yup.object().shape({
		addons: Yup.array().min(1, "Please select at least one addon").required(),
	});

	const storageData = JSON.parse(localStorage.getItem("step3FormData"));

	console.log(storageData);
	// Retrieve form values from localStorage for pre-filling
	const initialValues = {
		addons: storageData || [],
	};

	// Get selected addons from localStorage
	const [selectedAddons, setSelectedAddons] = useState(initialValues.addons);

	// Function to check if addon is selected
	const isAddonSelected = (addon) => {
		return selectedAddons.some(
			(selectedAddon) => selectedAddon.id === addon.id
		);
	};

	// Update selected addons state and highlight when checked
	const handleAddonChange = (addon) => {
		let updatedAddons;

		if (isAddonSelected(addon)) {
			updatedAddons = selectedAddons.filter(
				(selectedAddon) => selectedAddon.id !== addon.id
			);
		} else {
			updatedAddons = [...selectedAddons, addon];
		}
		setSelectedAddons(updatedAddons);
	};

	// Handle form submission
	const handleSubmit = () => {
		// Store form values in localStorage
		localStorage.setItem("step3FormData", JSON.stringify(selectedAddons));
		navigate("/step4");
	};

	// Count number of checked items
	const checkedCount = selectedAddons.length;

	// Repopulate the checked items from localStorage on reload
	useEffect(() => {
		setSelectedAddons(initialValues.addons);
	}, []);

	console.log(selectedAddons);

	return (
		<div className="flex flex-col justify-center items-center h-full mt-6">
			<div className="font-ubuntu flex flex-col justify-between h-full lg:w-4/5 w-full ">
				<div className="w-full">
					<h1 className="text-2xl text-marineBlue font-bold mb-3">
						Pick add-ons
					</h1>
					<h2 className="text-md text-coolGray font-semibold mb-3">
						Add-ons help enhance your gaming experience
					</h2>
					{addons.map((addon) => (
						<div
							key={addon.id}
							className={`  mb-4 py-10 px-3 lg:px-5 flex flex-row w-full border-2 rounded-md h-10 items-center justify-between ${
								isAddonSelected(addon)
									? "bg-magnolia border-purplishBlue"
									: "bg-white border-lightGray"
							} checkbox-container`}
						>
							<label className=" cursor-pointer text-gray-700 text-sm font-bold flex flex-row gap-1 md:gap-3 lg:gap-4  items-center">
								<input
									type="checkbox"
									name={addon.label}
									checked={isAddonSelected(addon)}
									onChange={() => handleAddonChange(addon)}
									className="mr-2  accent-purplishBlue  "
								/>

								<div className="flex flex-col justify-start ">
									<span className="text-marineBlue text-md lg:text-lg font-semibold">
										{addon.label}
									</span>
									<span className="text-xs lg:text-sm text-coolGray">
										{addon.tag}
									</span>
								</div>
							</label>

							<p className="text-purplishBlue text-sm md::text-md lg:text-lg">
								+${addon.price}/mo
							</p>
						</div>
					))}
					<div className="text-red-500 text-sm">
						{checkedCount === 0 && <p>Please select at least one addon</p>}
					</div>
				</div>
				<div className="flex justify-between absolute lg:static z-99 bottom-[-10rem] right-[-3.1rem] bg-white lg:bg-transparent w-screen h-16 items-center px-2 lg:w-full">
					<button
						className="text-marineBlue font-bold py-2 px-4 rounded mr-4 focus:outline-none focus:shadow-outline"
						onClick={() => navigate("/step2")}
					>
						Go Back
					</button>
					<Button onClick={handleSubmit} disabled={checkedCount === 0}>
						Next Step
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Step3;
