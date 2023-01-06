import React from "react";
import logo from "../public/logo.png";
import { Button } from "@chakra-ui/react";
import useMetamask from "../hooks/useMetamask";
import { useUserContext } from "../context/UserInfoContext";

function Navbar() {
  const { connectMetamask, disconnectMetamask } = useMetamask();
  const { userValues, updateContext } = useUserContext();

  const formatEthAddress = (address: string) =>
    address && address.slice(0, 5) + "..." + address.slice(38, 42) + " ";

  return (
    <div className="navbar d-flex justify-center">
      <div className="container">
        <div
          className="logo"
          style={{ backgroundImage: `url(${logo.src})` }}
        ></div>
        <div className="connect">
          {userValues.address ? (
            <Button
              colorScheme="messenger"
              fontSize="1.5rem"
              height="45px"
              className="connect-btn"
              onClick={disconnectMetamask}
            >
              {formatEthAddress(userValues.address)}
            </Button>
          ) : (
            <Button
              colorScheme="messenger"
              fontSize="2rem"
              height="45px"
              className="connect-btn"
              onClick={connectMetamask}
            >
              Connect
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
