import React from "react";

function Steps() {
  return (
    <div className="steps-container">
      <div style={{ fontSize: "2.5rem", fontWeight: "900" }}>HOW TO MINT</div>
      <div className="steps-box">
        <div className="step">
          <div className="step-number">1</div>
          <div className="step-text">Connect your wallet</div>
        </div>
        <div className="step">
          <div className="step-number">2</div>
          <div className="step-text">Select your quantity</div>
        </div>
        <div className="step">
          <div className="step-number">3</div>
          <div className="step-text">Confirm Transaction</div>
        </div>
        <div className="step">
          <div className="step-number">4</div>
          <div className="step-text">Receive your NFTs</div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
