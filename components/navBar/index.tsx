import { messages } from "./messages";
import Image from "next/image";
import { Button } from "../shared/button";
import { style } from "./style";
import { BreakPoints, useResize } from "../../hooks/useResize";
import { Menu } from "./components/Menu";
import { useState } from "react";

export const NavBar = () => {
  const [isOpen, setItOpen] = useState<boolean>(false);
  const size = useResize();
  const navClasses =
    size === BreakPoints.SM
      ? isOpen
        ? style.navBarMobileOpen
        : style.navBar
      : style.navBar;

  const handleClick = () => {
    console.log("click");
  };
  return (
    <nav className={navClasses}>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      <Menu isOpen={isOpen} setItOpen={setItOpen} breackPoint={size} />
      {size !== BreakPoints.SM && size !== BreakPoints.MD && (
        <Button
          text={messages.button}
          onClick={handleClick}
          className={style.button}
        />
      )}
    </nav>
  );
};
