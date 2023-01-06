import React from "react";
import logo from "../public/logo.png";
import { Button } from "@chakra-ui/react";

function Navbar() {
  return (
    <div className="navbar d-flex justify-center">
      <div className="container">
        <div
          className="logo"
          style={{ backgroundImage: `url(${logo.src})` }}
        ></div>
        <div className="connect">
          <Button colorScheme="messenger" fontSize="2rem" height="45px">
            Connect
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
