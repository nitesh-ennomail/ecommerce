import React from "react";
import "../styles/ProductReviewCard.css";

function ProductReviewCard({ image, name, review, price, index }) {
	return (
		<div className="ProductReviewCard">
			<img src={image} alt={`${index} reviews`} />
			<h5>{review}</h5>
			<span>{name}</span>
			<b>{price}</b>
		</div>
	);
}

export default ProductReviewCard;
