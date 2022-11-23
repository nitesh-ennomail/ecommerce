import "./App.css";
import NavBar from "./components/NavBar";
import NavOption from "./components/NavOption.js";
import PreNavBar from "./components/PreNavBar";
import Slider from "./components/Slider.js";
import Offers from "./components/Offers.js";
import Heading from "./components/Heading.js";
import StarProduct from "./components/StarProduct.js";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js";
import HotAccessories from "./components/HotAccessories.js";
import ProductReviews from "./components/ProductReviews.js";
import Videos from "./components/Videos.js";
import Banner from "./components/Banner.js";
import Footer from "./components/Footer.js";

import data from "./data/data.json";

import {
	BrowserRouter as Router,
	Route,
	createBrowserRouter,
	RouterProvider,
	Routes,
	Outlet,
} from "react-router-dom";
function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<div>
					<PreNavBar />
					<NavBar data={data} />

					{/* <NavOption /> */}
					{/* <div id="navOption">
						<Outlet />
					</div> */}
					{/* <NavOptions /> */}
					<Slider start={data.banner.start} />
					<Offers offer={data.offer} />

					<Heading text="STAR PRODUCTS" />
					<StarProduct starProduct={data.starProduct} />

					<Heading text="HOT ACCESSORIES" />
					<HotAccessoriesMenu />
					<div id="hotAccessories">
						<Outlet />
					</div>

					<Heading text="PRODUCT REVIEWS" />
					<ProductReviews productReviews={data.productReviews} />

					<Heading text="VIDEOS" />
					<Videos videos={data.videos} />

					<Heading text="IN THE PRESS" />
					<Banner end={data.banner.end} />

					<Footer footer={data.footer} />
				</div>
			),
			errorElement: <h1>not found</h1>,
			children: [
				{
					path: "/hotAccessories",
					element: (
						<HotAccessories
							data={data.hotAccessories.music}
							dataCover={data.hotAccessoriesCover.music}
						/>
					),
				},
				{
					path: "/hotAccessories/smartDevices",
					element: (
						<HotAccessories
							data={data.hotAccessories.smartDevice}
							dataCover={data.hotAccessoriesCover.smartDevice}
						/>
					),
				},
				{
					path: "/hotAccessories/home",
					element: (
						<HotAccessories
							data={data.hotAccessories.home}
							dataCover={data.hotAccessoriesCover.home}
						/>
					),
				},
				{
					path: "/hotAccessories/lifestyle",
					element: (
						<HotAccessories
							data={data.hotAccessories.lifeStyle}
							dataCover={data.hotAccessoriesCover.lifeStyle}
						/>
					),
				},
				{
					path: "/hotAccessories/mobileAccessories",
					element: (
						<HotAccessories
							data={data.hotAccessories.mobileAccessories}
							dataCover={data.hotAccessoriesCover.mobileAccessories}
						/>
					),
				},

				// Nav option
				// {
				// 	path: "/miphones",
				// 	element: (
				// 		<NavOption
				// 			data={data.miPhones}
				// 			// dataCover={data.hotAccessoriesCover.music}
				// 		/>
				// 	),
				// },

				// {
				// 	path: "/redmiphones",
				// 	element: <NavOption data={data.redmiPhones} />,
				// },
				// {
				// 	path: "/tv",
				// 	element: <NavOption data={data.tv} />,
				// },
				// {
				// 	path: "/laptops",
				// 	element: <NavOption data={data.laptop} />,
				// },
				// {
				// 	path: "/lifestyles",
				// 	element: <NavOption data={data.fitnessAndLifeStyle} />,
				// },
				// {
				// 	path: "/home",
				// 	element: <NavOption data={data.home} />,
				// },
				// {
				// 	path: "/audio",
				// 	element: <NavOption data={data.audio} />,
				// },
				// {
				// 	path: "/accessories",
				// 	element: <NavOption data={data.accessories} />,
				// },
			],
		},
	]);

	return (
		<div className="App">
			<RouterProvider router={router} />
			{/* <Router>
				<PreNavBar />
				<NavBar />
				<Slider start={data.banner.start} />
				<Offers offer={data.offer} />
				<Heading text="STAR PRODUCTS" />
				<StarProduct starProduct={data.starProduct} />
				<Heading text="HOT ACCESSORIES" />
				<HotAccessoriesMenu />
				<Route exact path="/music">
					<HotAccessories />
				</Route>
			</Router> */}
		</div>
	);
}

export default App;
