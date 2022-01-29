import React, { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.svg";

const Menu = () => {
  return (
    <>
      <p>
        <a class="underline-hover-effect" href="#home">
          Home
        </a>
      </p>
      <p>
        <a class="underline-hover-effect" href="#tclasses">
          Tech Classes
        </a>
      </p>
      <p>
        <a class="underline-hover-effect" href="#stemcert">
          Certificate
        </a>
      </p>

      <p>
        <a class="underline-hover-effect" href="#tsa">
          TSA
        </a>
      </p>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="lhs__navbar">
      <div className="lhs__navbar-links">
        <div className="lhs__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="lhs__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="lhs__navbar-vevnt">
        <p></p>
        <button type="button">Virtual Event</button>
      </div>
      <div className="lhs__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="lhs__navbar-menu_container scale-up-center">
            <div className="lhs__navbar-menu_container-links">
              <Menu />
              <div className="lhs__navbar-menu_container-links-vevnt">
                <p></p>
                <button type="button">Virtual Event</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
