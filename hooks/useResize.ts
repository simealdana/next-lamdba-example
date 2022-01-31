import { useState, useEffect } from "react";

export enum BreakPoints {
  SM = "sm",
  MD = "md",
  XXL = "xxl",
  LG = "lg",
  XL = "xl",
}

const getBreackPoint = (): BreakPoints =>
  handleRevoleBreakPoint(
    window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
  );

const handleRevoleBreakPoint = (size: Number) =>
  size >= 1536
    ? BreakPoints.XXL
    : size < 1536 && size >= 1280
    ? BreakPoints.XL
    : size < 1280 && size >= 1024
    ? BreakPoints.LG
    : size < 1024 && size >= 768
    ? BreakPoints.MD
    : BreakPoints.SM;

export const useResize = () => {
  const [size, setSize] = useState<BreakPoints>(BreakPoints.MD);
  const resizeListener = () => {
    setSize(getBreackPoint());
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

  return size;
};
