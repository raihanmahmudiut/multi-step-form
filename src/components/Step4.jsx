import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./button";

function Step4() {
	const [subscription, setSubscription] = useState(null);
	const [addons, setAddons] = useState([]);
	const navigate = useNavigate()

	useEffect(() => {
		// Retrieve subscription data from localStorage
		const storedSubscription = localStorage.getItem("step2FormData");
		if (storedSubscription) {
			const { plan } = JSON.parse(storedSubscription);
			setSubscription({ name: plan, cost: getSubscriptionCost(plan) });
			console.log(plan);
		}

		// Retrieve addons data from localStorage
		const storedAddons = localStorage.getItem("step3FormData");
		if (storedAddons) {
			const { addons: selectedAddons } = JSON.parse(storedAddons);
			setAddons(selectedAddons);
		}
	}, []);

	// Function to calculate the cost of the selected subscription plan
	const getSubscriptionCost = (plan) => {
		// Define subscription costs based on plans
		const planCosts = {
			arcade: 9,
			advanced: 12,
			pro: 15,
		};

		return planCosts[plan];
	};

	// Function to calculate the cost of each addon
	const getAddonCost = (addon) => {
		// Define addon costs based on selection
		const addonCosts = {
			onlineService: 1,
			largerStorage: 2,
			customizableProfile: 2,
		};

		return addonCosts[addon];
	};

	// Calculate total cost based on subscription and add-ons
	const calculateTotal = () => {
		let total = 0;

		// Add subscription cost
		if (subscription) {
			total += subscription.cost;
		}

		// Add add-ons cost
		addons.forEach((addon) => {
			total += addon.cost;
		});

		return total;
	};

	return (
		<div className="font-ubuntu text-black h-full flex flex-col justify-between">
			<div>
				<h2 className="text-lg font-semibold mb-3">
					Double-check everything looks OK before confirming
				</h2>
				<div className="mb-4">
					<h3 className="text-md font-semibold">Subscription Details:</h3>
					{subscription && (
						<div>
							<p>{subscription.name}</p>
							<p>{subscription.cost}</p>
						</div>
					)}
				</div>
				<div className="mb-4">
					<h3 className="text-md font-semibold">Add-ons:</h3>
					{addons.map((addon) => (
						<div key={addon}>
							<p>{addon}</p>
						</div>
					))}
				</div>
				<div className="mb-4">
					<h3 className="text-md font-semibold">Total (per month/year):</h3>
					<p>{calculateTotal()}</p>
				</div>
			</div>

			<div className="flex justify-between w-full">
				<button
					className="text-marineBlue font-bold py-2 px-4 rounded mr-4 focus:outline-none focus:shadow-outline"
					onClick={() => navigate("/step3")}
				>
					Go Back
				</button>

				<Button onClick={() => navigate("/step5")}>Confirm</Button>
			</div>
		</div>
	);
}

export default Step4;
