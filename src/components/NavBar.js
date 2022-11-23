import React, { useRef, useState, useEffect } from "react";
import "../styles/nav.css";
import data from "../data/data.json";
import { Link } from "react-router-dom";
import NavCard from "./NavCard";

const searchIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="24px"
		viewBox="0 0 24 24"
		width="24px"
		fill="#000000">
		<path d="M0 0h24v24H0V0z" fill="none" />
		<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
	</svg>
);

const Navbar = ({ data }) => {
	const wrapperRef = useRef(null);
	useOutsideAlerter(wrapperRef);
	const { logo } = data;

	const [isHovering, setIsHovering] = useState(false);
	const [hoverData, setHoverData] = useState(false);

	const handleMouseOver = (data) => {
		setHoverData(data);
		setIsHovering(true);
	};

	const handleMouseOut = () => {
		// setIsHovering(false);
	};

	/**
	 * Hook that alerts clicks outside of the passed ref
	 */
	function useOutsideAlerter(ref) {
		useEffect(() => {
			/**
			 * Alert if clicked on outside of element
			 */
			function handleClickOutside(event) {
				if (ref.current && !ref.current.contains(event.target)) {
					// alert("You clicked outside of me!");
					setIsHovering(false);
				}
			}
			// Bind the event listener
			document.addEventListener("mouseover", handleClickOutside);
			return () => {
				// Unbind the event listener on clean up
				document.removeEventListener("mouseover", handleClickOutside);
			};
		}, [ref]);
	}

	return (
		<div ref={wrapperRef}>
			<div className="nav">
				<div className="logo">
					<Link to="/">
						<img id="logoImage" src={logo} alt="Not" />
					</Link>
				</div>

				<Link
					onMouseOver={() => handleMouseOver(data.miPhones)}
					onMouseOut={handleMouseOut}
					className="navlinks">
					Mi Phones
				</Link>
				<Link
					onMouseOver={() => handleMouseOver(data.redmiPhones)}
					onMouseOut={handleMouseOut}
					className="navlinks">
					Redmi Phones
				</Link>
				<Link
					onMouseOver={() => handleMouseOver(data.tv)}
					onMouseOut={handleMouseOut}
					className="navlinks">
					TV
				</Link>
				<Link
					onMouseOver={() => handleMouseOver(data.laptop)}
					onMouseOut={handleMouseOut}
					className="navlinks">
					Laptops
				</Link>
				<Link
					onMouseOver={() => handleMouseOver(data.fitnessAndLifeStyle)}
					onMouseOut={handleMouseOut}
					className="navlinks">
					Fitness & Lifestyle
				</Link>
				<Link
					onMouseOver={() => handleMouseOver(data.home)}
					onMouseOut={handleMouseOut}
					className="navlinks">
					Home
				</Link>
				<Link
					onMouseOver={() => handleMouseOver(data.audio)}
					onMouseOut={handleMouseOut}
					className="navlinks">
					Radio
				</Link>
				<Link
					onMouseOver={() => handleMouseOver(data.accessories)}
					onMouseOut={handleMouseOut}
					className="navlinks">
					Accessories
				</Link>

				<div className="searchbox">
					<input type="text" name="search" placeholder="Search Products" />
					{searchIcon}
				</div>
			</div>
			{isHovering && (
				<div className="navOptions">
					{hoverData.map((item, index) => (
						<NavCard
							image={item.image}
							index={index}
							key={index}
							name={item.name}
							price={item.price}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default Navbar;
