import React from "react";
import { Button } from "@chakra-ui/react";
import art from "../public/art.png";

function MainContainer() {
  return (
    <div className="main-container">
      <div className="info-container">
        <h1 style={{ fontSize: "3rem", fontWeight: "900" }}>MINT NOW</h1>
        <h1 style={{ fontSize: "3rem", fontWeight: "900" }}>
          FARIA COLLECTION
        </h1>
        <h2 style={{ fontSize: "2rem", fontWeight: "900" }}>03/100 Minted</h2>
        <Button colorScheme="messenger" width={200} mt={4} mb={6}>
          Mint Now
        </Button>
        <div
          className="minting-details"
          style={{ fontSize: "1.5rem", fontWeight: "700" }}
        >
          <div>0.001 ETH + gas prices</div>
          <div>Max 2 nfts per wallet</div>
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
