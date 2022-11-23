import React from "react";
import Offer from "./Offer.js";
import "../styles/offers.css";

function Offers({ offer }) {
	return (
		<div className="offersSection">
			{offer.map((item, index) => (
				<Offer key={index} index={index} src={item.image} url={item.url} />
			))}
		</div>
	);
}

export default Offers;
