import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./utility/Header";

const Navbar = () => {
  return (
    <div className=" fixed top-0 left-0 right-0 z-50">
      <Header></Header>
    </div>
  );
};

export default Navbar;
