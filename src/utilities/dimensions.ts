import { useState, useEffect, RefObject } from "react";

type Dimensions = {
  width: number;
  height: number;
};

export const getElementDimensionsRef = (
  ref: RefObject<HTMLElement>,
): Dimensions => {
  const { current } = ref;

  if (current) {
    const { offsetWidth: width, offsetHeight: height } = current;
    return { width, height };
  }

  return { width: 0, height: 0 };
};

export function useElementDimensions(ref: RefObject<HTMLElement>) {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
  });

  const updateDimensions = () => {
    if (ref.current) {
      const { offsetWidth: width, offsetHeight: height } = ref.current;
      setDimensions({ width, height });
    }
  };

  useEffect(() => {
    updateDimensions();

    const handleResize = () => {
      updateDimensions();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return dimensions;
}
