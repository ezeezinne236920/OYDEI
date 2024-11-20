import { useState, useEffect } from "react";

export function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Function to update screen size
    const updateScreenSize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Attach the event listener
    window.addEventListener("resize", updateScreenSize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []); // Empty dependency array to run the effect only once

  return screenSize;
}
