import React from "react";
import { BubbleBounceWrapper } from "./bubble.style";

function BubbleBounce() {
  return (
    <BubbleBounceWrapper>
      <div className="loader" id="loader-2">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </BubbleBounceWrapper>
  );
}

export default BubbleBounce;
