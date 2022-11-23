import React from "react";
import { json } from "react-router-dom";
import NavCard from "./NavCard.js";
import "../styles/NavOption.css";

function NavOption({ data }) {
	return (
		<div className="navOptions">
			{data.map((item, index) => (
				<NavCard
					image={item.image}
					index={index}
					key={index}
					name={item.name}
					price={item.price}
				/>
			))}
		</div>
	);
}

export default NavOption;
