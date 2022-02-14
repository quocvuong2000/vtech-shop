import "./App.css";
import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import BrandList from "./pages/brandList/brandList";
import Brand from "./pages/brand/brand";
import NewBrand from "./pages/newBrand/newBrand";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const admin = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      
      {admin ? (
        <>
            <Topbar />
          <div className="container">
              <Sidebar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/products" element={<ProductList />}></Route>
              <Route path="/product/:productId" element={<Product />}></Route>
              <Route path="/newproduct" element={<NewProduct />}></Route>
              <Route path="/brands" element={<BrandList />}></Route>
              <Route path="/brands/:brandId" element={<Brand />}></Route>
              <Route path="/newbrand" element={<NewBrand />}></Route>
            </Routes>
          </div>
        </>
      ) : (
      <Routes>
        <Route path="/" element={<Login />}></Route>
      </Routes>
      )}
    </Router>
  );
};

export default App;
