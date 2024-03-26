import React, { useEffect, useState } from "react";
import Thankyou from "../assets/images/icon-thank-you.svg";

function Step5() {
	const [storedUser, setStoredUser] = useState({});

	useEffect(() => {
		const storedUser = localStorage.getItem("step1FormData");
		if (storedUser) {
			const user = JSON.parse(storedUser);
			setStoredUser({
				name: user.name,
				email: user.email,
				phone: user.phone,
			});
		}
	}, [storedUser]);

	return (
		<div className=" flex flex-col justify-center items-center w-full h-full mt-6">
			<div className="flex flex-col justify-center items-center gap-5">
				<img src={Thankyou} className="w-12 h-12 z-50" />
				<h1 className="text-2xl font-bold mb-5 text-marineBlue">
					Thank You{" "}
					<span className="text-marineBlue font-bold">
						{storedUser.name}
						{storedUser.name == "Jubair Ahmad" ? "thank you peye khushi?" : ""}
					</span>{" "}
					!
				</h1>

				<p className="mb-4 px-6 text-coolGray text-center">
					We'll reach out with further instructions at{" "}
					<span className="text-purplishBlue font-semibold">
						{storedUser.phone}
					</span>{" "}
					&{" "}
					<span className="text-pastelBlue font-bold">{storedUser.email}</span>
				</p>
				<p className="mb-4 px-6 text-coolGray text-center">
					Thanks for confirming your subscription! We hope you have fun using
					our platform. If you ever need support, please feel free to email us
					at{" "}
					<a href="mailto:support@loremgaming.com" className="text-blue-500">
						support@loremgaming.com
					</a>
					.
				</p>
			</div>
		</div>
	);
}

export default Step5;
