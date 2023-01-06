import React from "react";
import logo from "../public/logo.png";

function Navbar() {
  return (
    <div className="navbar d-flex justify-center">
      <div className="container">
        <div
          className="logo"
          style={{ backgroundImage: `url(${logo.src})` }}
        ></div>
        <div className="connect">Connect</div>
      </div>
    </div>
  );
}

export default Navbar;
