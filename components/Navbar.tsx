import React from "react";
import logo from "../public/logo.png";
import { Button } from "@chakra-ui/react";
import useMetamask from "../hooks/useMetamask";
import { useUserContext } from "../context/UserInfoContext";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

function Navbar() {
  const { connectMetamask, disconnectMetamask } = useMetamask();
  const { userValues } = useUserContext();

  const formatEthAddress = (address: string) =>
    address && address.slice(0, 5) + "..." + address.slice(38, 42) + " ";

  const openOpenSeaInNewTab = () => {
    const url = `https://testnets.opensea.io/${userValues.address}`;
    const newWindow = window.open(url, "_blank");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="navbar d-flex justify-center">
      <div className="container">
        <div
          className="logo"
          style={{ backgroundImage: `url(${logo.src})` }}
        ></div>
        <div className="connect">
          {userValues.address ? (
            <>
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  colorScheme="messenger"
                >
                  {formatEthAddress(userValues.address)}
                </MenuButton>
                <MenuList>
                  <MenuItem fontSize="1rem" onClick={openOpenSeaInNewTab}>Go to Opensea</MenuItem>
                  <MenuItem fontSize="1rem" onClick={disconnectMetamask}>
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
            </>
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
