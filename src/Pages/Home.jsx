import React from "react";
import Navbar from "../assets/components/Navbar";
import Carousel from "../assets/components/Carousel";
import Category from "../assets/components/Category";
import Product from "../assets/components/Product";
import Sale from "../assets/components/Sale";

const Home = () => {
  return (
    <div className=" h-[220vh] px-7">
   
      <Navbar></Navbar>
      <Carousel />
      <Category></Category>
      {/* <Product></Product> */}
      <Sale>   </Sale>
    </div>
  );
};

export default Home;
