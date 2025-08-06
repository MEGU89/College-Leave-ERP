// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../component/images/logo.png'

const Navbar = () => {
  return (
    <div className="head bg-slate-900 h-16  flex items-center justify-between">
      <div className="Nav-logo " >
        <img src={logo} alt="" className="nav-logo h-10 pl-10" />
      </div>
      <div className="Nav-btns flex gap-5 pr-8 text-white hover:text-green" >
        <Link to={"/"} >
          <p className="nav-item hover:text-gray-300">Home</p>
        </Link>
        <Link to={"/dashboard"} >
          <p className="nav-item hover:text-gray-300">Dashboard</p>
        </Link>
        <Link to={"/apply"} >
          <p className="nav-item hover:text-gray-300">Apply For Leave</p>
        </Link>
        <Link to={"/leaveStatus"} >
          <p className="nav-item hover:text-gray-300">Leave Status</p>
        </Link>
        <Link to={"/signIn"} >
          <p className="nav-item hover:text-gray-300">Login</p>
        </Link>
        <Link to={"/signUp"}>
          <p className="nav-item hover:text-gray-300">SignUp</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
 