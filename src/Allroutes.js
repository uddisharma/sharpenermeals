import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ProductList from "./Components/PorductList";
import FoodDetails from "./Pages/FoodDetails";
import Cart from "./Pages/Cart";
const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:name" element={<ProductList />} />
        <Route path="/category/:name/:meal" element={<FoodDetails />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
    </div>
  );
};

export default Allroutes;
