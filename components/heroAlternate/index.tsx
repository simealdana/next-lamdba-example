import { BreakPoints } from "../../hooks/useResize";
import { styles } from "./style";
import { Button } from "../shared/button";
import { ImageWithSketelon } from "../shared/Image";
import { messages } from "./messages";
import { useEffect, useState } from "react";

interface HeroInterfaces {
  breackPoint: BreakPoints;
}
const INITAL_SIZE:number = 500;

export const HeroAlternate = ({ breackPoint }: HeroInterfaces) => {
  const [imgSize,setImgSize]=useState<number>(INITAL_SIZE);

  const handleSettingImgSize = ()=>{
    if( breackPoint === BreakPoints.MD){
      setImgSize(300)
    }
  }

  useEffect(()=>{
    handleSettingImgSize();
  },[breackPoint])
  const handleClick = () => {
    window.open("https://discord.com/", "_blank");
  };
  return (
    <main className="alternate__hero">
        <div className="alternate_hero__content">
            <ImageWithSketelon
                src="https://res.cloudinary.com/doa8qp6ca/image/upload/v1644170516/capybaras/CAPYillustration_3_2_vwxrl5.png"
                width={imgSize}
                height={imgSize}
                alt="test"
            />
            <Button
                text={messages.buttonText}
                onClick={() => handleClick}
                className={styles.heroButton}
            />
        </div>
    </main>
  );
};
