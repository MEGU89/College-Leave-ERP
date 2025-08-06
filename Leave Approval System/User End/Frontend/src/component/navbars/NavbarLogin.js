import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'

function NavbarLogin() {
    return (
        <div className="head bg-slate-900 h-16  flex items-center justify-between">
          <div className="Nav-logo " >
            <img src={logo} alt="" className="nav-logo h-10 pl-10" />
          </div>
          <div className="Nav-btns flex gap-5 pr-8 text-white hover:text-green" >
            
            <Link to={"/signIn"} >
              <p className="nav-item hover:text-gray-300">Login</p>
            </Link>
            <Link to={"/signUp"}>
              <p className="nav-item hover:text-gray-300">SignUp</p>
            </Link>
          </div>
        </div>
      );
}

export default NavbarLogin
