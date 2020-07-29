import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://cdn.dribbble.com/users/430847/screenshots/5097896/dribbble-final.gif"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
//https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png
