import React from "react";
import logo from "../assets/logo.png";
import moment from "moment";

const Header = () => {
  
  return (
    <div className="flex flex-col items-center gap-2 py-5">
      <div className="">
        <img className="w-[400px]" src={logo} alt="" />
      </div>
      <h2 className="text-gray-400">Journalism Without Fear or Favour</h2>
      <p>{moment().format('dddd, MMMM Do YYYY')}</p>
    </div>
  );
};

export default Header;
