import { style } from "./style";
import { ImageWithSketelon } from "../shared/Image";
import { Icono } from "../shared/icono";
import { SOCIALMEDIALIST } from "./constants";
import { SocialMedia } from "./interfaces";

export const NavBarAlternate = () => {
  const IconsList = (list: SocialMedia[]): any =>
    list.map(({ iconSvg, url }) => (
      <li className="px-3">
        <Icono width={30} height={30} svgUrl={iconSvg} url={url} />
      </li>
    ));
  return (
    <nav className={style.navBar}>
      <ImageWithSketelon
        src="/img/imgLogoNav.png"
        alt="Vercel Logo"
        width={72}
        height={40}
      />
      <ul className="flex">{IconsList(SOCIALMEDIALIST)}</ul>
    </nav>
  );
};


