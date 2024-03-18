import React from "react";

function Button({ children, onClick, disabled, classNameExtra }) {
	return (
		<button
			type="submit"
			onClick={onClick}
			disabled={disabled}
			className={`bg-marineBlue hover:bg-purplishBlue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${classNameExtra} `}
		>
			{children}
		</button>
	);
}

export default Button;
