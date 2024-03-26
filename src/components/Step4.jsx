import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./button";

function Step4() {
	const [subscription, setSubscription] = useState(null);
	const [addons, setAddons] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		// Retrieve subscription data from localStorage
		const storedSubscription = localStorage.getItem("step2FormData");
		if (storedSubscription) {
			const subscriptions = JSON.parse(storedSubscription);
			setSubscription({
				name: subscriptions.label,
				cost: subscriptions.cost,
				period: subscriptions.period,
			});
		}

		// Retrieve addons data from localStorage
		const storedAddons = localStorage.getItem("step3FormData");
		if (storedAddons) {
			const selectedAddons = JSON.parse(storedAddons);
			setAddons(selectedAddons);
		}
	}, []);

	// Calculate total cost based on subscription and add-ons
	const calculateTotal = () => {
		let total = 0;

		// Add subscription cost
		if (subscription) {
			total += subscription.cost;
		}

		// Add add-ons cost foer both monthly and yearly subscriptions
		addons.forEach((addon) => {
			if (subscription.period === "Monthly") {
				total += addon.price;
			} else {
				total += addon.price * 12;
			}
		});

		return total;
	};

	return (
		<div className="flex flex-col justify-center items-center w-full h-full mt-6">
			<div className="font-ubuntu flex flex-col justify-between h-full lg:w-4/5 w-full ">
				<div>
					<div className="flex flex-col gap-3">
						<h2 className="text-marineBlue font-bold text-2xl">Finishing Up</h2>
						<h2 className="text-lg text-coolGray font-semibold mb-3">
							Double-check everything looks OK before confirming
						</h2>
					</div>

					<div className="bg-magnolia rounded-md p-5">
						<div className="mb-4">
							{subscription && (
								<div className="flex flex-row w-full items-center justify-between">
									<div className="flex flex-col">
										<p className="text-marineBlue font-bold text-lg">
											{subscription.name}
											<span>({subscription.period})</span>
										</p>
										<h6
											className="cursor-pointer text-sm text-coolGray"
											onClick={() => navigate("/step2")}
										>
											Change
										</h6>
									</div>
									<p className="text-marineBlue font-semibold text-md ">
										${subscription.cost}
										{subscription.period === "Monthly" ? "/mo" : "/yr"}
									</p>
								</div>
							)}
						</div>
						<div className="mb-4 text-coolGray">
							{addons.map((addon) => (
								<div
									key={addon.id}
									className="flex flex-row w-full justify-between items-center"
								>
									<p>{addon.label}</p>
									<p>${addon.price}/mo</p>
								</div>
							))}
						</div>
					</div>
					<div className="mb-4  p-5 flex flex-row justify-between w-full">
						<h3 className="text-md text-coolGray font-semibold">
							Total (per {subscription?.period === "Monthly" ? "month" : "year"}
							):
						</h3>
						<p className="text-purplishBlue text-lg font-bold">
							${calculateTotal()}
							{subscription?.period === "Monthly" ? "/mo" : "/yr"}
						</p>
					</div>
				</div>

				<div className="flex justify-between  absolute lg:static z-99 bottom-[-10rem] right-[-1rem] w-screen bg-white lg:bg-transparent  h-16 items-center px-2 lg:w-full">
					<button
						className="text-marineBlue font-bold lg:py-2 lg:px-4 rounded mr-4 focus:outline-none focus:shadow-outline"
						onClick={() => navigate("/step3")}
					>
						Go Back
					</button>

					<Button onClick={() => navigate("/step5")}>Confirm</Button>
				</div>
			</div>
		</div>
	);
}

export default Step4;
