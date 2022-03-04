import { messages } from "./messages";
import { Button } from "../shared/button";
import { style } from "./style";
import { BreakPoints, useResize } from "../../hooks/useResize";
import { Menu } from "./components/Menu";
import { useState } from "react";
import { ImageWithSketelon } from "../shared/Image";

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
    console.log("clicked");
  };
  return (
    <nav className={navClasses}>
      <ImageWithSketelon
        src="/img/imgLogoNav.png"
        alt="Vercel Logo"
        width={72}
        height={40}
      />
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
