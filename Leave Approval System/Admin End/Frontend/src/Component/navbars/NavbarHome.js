import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'

function NavbarHome() {
  return (
    <div>
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
        <Link to={"/viewstatus"} >
          <p className="nav-item hover:text-gray-300">Students Status</p>
        </Link>
        
        <Link to={""} onClick={() => {
          localStorage.clear();
          window.location.reload()
        }} >
          <p className="nav-item hover:text-gray-300">Logout</p>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default NavbarHome
