import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdidasProductItem from "../Category/AdidasProductItem";
import NikeProductItem from "../Category/NikeProductItem";
import ReebokProductItem from "../Category/ReebokProductItem";
import UnderarmourProductItem from "../Category/UnderarmourProductItem";
import Navbar from "../Components/Navbar";
import Home from "../Pages/Home";
import PageNotFound from "../Pages/PageNotFound";
import ProductPage from "../Pages/ProductPage";

const RouteConfig = () => {

  return (

    <div>

    	<Router>
    		<Navbar />
    		<Routes>
    			<Route path="/" element={<Home />} exact />
    			<Route path="/products" element={<ProductPage/>} exact />
    			<Route path="/products/adidas/:id" element={<AdidasProductItem/>} exact />
    			<Route path="/products/nike/:id" element={<NikeProductItem/>} exact />
    			<Route path="/products/reebok/:id" element={<ReebokProductItem/>} exact />
    			<Route path="/products/underarmour/:id" element={<UnderarmourProductItem/>} exact />
    			<Route path="*" element={<PageNotFound />} exact />
    		</Routes>
    	</Router>
    </div>
  );
};

export default RouteConfig;
