import React from "react";
import "../styles/heading.css";

function Heading({ text }) {
	return (
		<div className="heading">
			<div></div>
			<p>{text}</p>
			<div></div>
		</div>
	);
}

export default Heading;
