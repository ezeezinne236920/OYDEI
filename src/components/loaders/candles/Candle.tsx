import React from "react";
import { CandleWrapper } from "./Candle.style";

function Candle() {
  return (
    <CandleWrapper>
      <div className="loader" id="loader-6">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </CandleWrapper>
  );
}

export default Candle;
