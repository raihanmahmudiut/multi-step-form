import React from "react";
import Thankyou from "../assets/images/icon-thank-you.svg";

function Step5() {
	return (
		<div className=" flex flex-col justify-center items-center h-full mt-6">
			<div className="flex flex-col justify-center items-center gap-5">
				<img src= {Thankyou} className="w-12 h-12 z-50" />
				<h1 className="text-2xl font-bold mb-5 text-marineBlue">Step 5: Thank You!</h1>
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
