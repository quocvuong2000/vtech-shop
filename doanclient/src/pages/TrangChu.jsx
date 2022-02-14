import React from "react";
import Annoucement from "../components/Annoucement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Product from "../components/Product";
import Slider from "../components/Slider";
import Viewall from "../components/Viewall";

function TrangChu() {
  return (
    <div>
      <Annoucement />
      <Navbar></Navbar>
      <Slider></Slider>
      <Categories></Categories>
      <Viewall></Viewall>
      <Product trangchu={{trangchu: true}}></Product>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
}

export default TrangChu;
