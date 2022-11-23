import React from "react";
import ProductReviewCard from "../components/ProductReviewCard.js";
import "../styles/ProductReviews.css";

function ProductReviews({ productReviews }) {
	return (
		<div className="ProductReviews">
			{productReviews.map((item, index) => (
				<ProductReviewCard
					image={item.image}
					review={item.review}
					name={item.name}
					price={item.price}
					key={index}
					index={index}
				/>
			))}
		</div>
	);
}

export default ProductReviews;
