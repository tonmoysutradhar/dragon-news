import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div>
      <div className="">
        <img className="w-[400px]" src={logo} alt="" />
      </div>
      <h2>Journalism Without Fear or Favour</h2>
    </div>
  );
};

export default Header;
