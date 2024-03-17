import React from "react";

function Button({ children, onClick }) {
	return (
		<button
            type="submit"
            onClick={onClick}
			className="bg-marineBlue hover:bg-purplishBlue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
		>
			{children}
		</button>
	);
}

export default Button;
