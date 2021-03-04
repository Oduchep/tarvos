import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Products } from "../pages/Products";
import { ProductDetails } from "../pages/ProductDetails";
import { ViewCart } from "../pages/ViewCart";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/products/:id" component={ProductDetails} />
				<Route path="/products" render={(props) => <Products sortBy="newest" {...props} />} />
				<Route path="/viewcart" component={ViewCart} />
			</Switch>
		</div>
	);
}

export default App;