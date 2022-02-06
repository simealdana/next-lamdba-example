import { style } from "./style";
import { ImageWithSketelon } from "../shared/Image";
import { SOCIALMEDIALIST } from "./constants";
import { IconsList } from "../shared/socialMediaList";
import { useEffect, useState } from "react";

export const NavBarAlternate = () => {
  const [isSticky,setIsSticky]=useState<boolean>(true);
  useEffect(()=>{
    window.addEventListener('mousewheel',(e:any)=>{
      e.wheelDelta >= 0 ? setIsSticky(true):setIsSticky(false);
    });
    return window.removeEventListener('mousewheel',()=>setIsSticky(true));
  },[])
  return (
    <nav className={`${style.navBar} ${!isSticky?'d_none':''}`}>
      <div className={style.navBarContainer}>
          <ImageWithSketelon
            src="/img/imgLogoNav.png"
            alt="Vercel Logo"
            width={72}
            height={40}
          />
          <ul className="flex">
            <IconsList items={SOCIALMEDIALIST} classes={"px-3"} />
          </ul>
        </div>
    </nav>
  );
};
