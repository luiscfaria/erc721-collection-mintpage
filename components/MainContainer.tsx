import React from "react";
import { Button } from "@chakra-ui/react";
import art from "../public/art.png";

function MainContainer() {
  return (
    <div className="main-container">
      <div className="info-container">
        <h1>MINT NOW</h1>
        <h1>FARIA COLLECTION</h1>
        <h1>03/100 Minted</h1>
        <Button colorScheme="messenger" width={200} mt={4} mb={6}>
          Mint Now
        </Button>
        <div
          className="minting-details"
        >
          <div>0.001 ETH + gas prices</div>
          <div>MAX 2 NFTs per mint</div>
        </div>
      </div>
      <div className="art-container">
        <div
          className="art"
          style={{ backgroundImage: `url(${art.src})` }}
        ></div>
      </div>
    </div>
  );
}

export default MainContainer;
