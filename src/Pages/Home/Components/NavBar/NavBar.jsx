import React, { useState } from "react";
import "./NavBar.css";
import logo from '../../../../../public/logo.jpg';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="NavContainer" id="home">
      <img src={logo} alt="Logo" />

      <div className={`menu ${menu ? "active" : null}`}>
        <a href="/">Home</a>
        <a href="#ourservices">Our Services</a>
        <a href="/contactus">Contact</a>
        <a href="/">About us</a>
      </div>

      <div className="Buttons">
        <button id="login">Log In</button>
        <button>Sign Up</button>
      </div>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={() => setMenu(!menu)}>
        {menu ? <IoClose size={30} /> : <GiHamburgerMenu size={30} />}
      </div>
    </div>
  );
};

export default NavBar;
