import { style } from "./style";
import { ImageWithSketelon } from "../shared/Image";
import { SOCIALMEDIALIST } from "./constants";
import { IconsList } from "../shared/socialMediaList";
export const NavBarAlternate = () => {

  return (
    <nav className={style.navBar}>
      <ImageWithSketelon
        src="/img/imgLogoNav.png"
        alt="Vercel Logo"
        width={72}
        height={40}
      />
      <ul className="flex">
        <IconsList items={SOCIALMEDIALIST} classes={"px-3"}/>
      </ul>
    </nav>
  );
};


