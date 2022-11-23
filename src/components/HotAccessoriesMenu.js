import React from "react";
import "../styles/HotAccessoriesMenu.css";
import { Link } from "react-router-dom";

function HotAccessoriesMenu() {
	return (
		<div className="HotAccessoriesMenu">
			<Link className="HotAccessoriesLink" to="/hotAccessories">
				Music Store
			</Link>
			<Link className="HotAccessoriesLink" to="/hotAccessories/smartDevices">
				Smart Devices
			</Link>
			<Link className="HotAccessoriesLink" to="/hotAccessories/home">
				Home
			</Link>
			<Link className="HotAccessoriesLink" to="/hotAccessories/lifestyle">
				Lifestyle
			</Link>
			<Link
				className="HotAccessoriesLink"
				to="/hotAccessories/mobileAccessories">
				Mobile Accessories
			</Link>
		</div>
	);
}

export default HotAccessoriesMenu;
