import React from "react";
import Navbar from "../assets/components/Navbar";
import Carousel from "../assets/components/Carousel";
import Category from "../assets/components/Category";

const Home = () => {
  return (
    <div className=" h-[120vh] px-7">
   
      <Navbar></Navbar>
      <Carousel />
      <Category></Category>
    </div>
  );
};

export default Home;
