import React from "react";
import { BubbleSlideWrapper } from "./bubble.style";

function BubbleSlide() {
  return (
    <BubbleSlideWrapper>
      <div className="loader" id="loader-4">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </BubbleSlideWrapper>
  );
}

export default BubbleSlide;
