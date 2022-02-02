import { useState, useEffect } from "react";

export enum SizeType {
  WIDTH = 1,
  HEIGTH = 2
}

const getSize = (sizeType:SizeType,divideIn:number):number =>{
    const width = window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
    const height = window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
    const result = sizeType === SizeType.WIDTH ? width/divideIn : height;
    return result 
}

export const useCalculateImageSize = (divideIn:number) => {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const resizeListener = () => {
    setWidth(getSize(SizeType.WIDTH,divideIn));
    setHeight(getSize(SizeType.HEIGTH,divideIn));
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Client-side-only code
      resizeListener();
      window.addEventListener("resize", resizeListener);
    }
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  });

  return [width,height];
};
