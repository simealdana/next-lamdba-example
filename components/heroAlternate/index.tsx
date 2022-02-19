import { BreakPoints, useResize } from "../../hooks/useResize";
import { styles } from "./style";
import { Button } from "../shared/button";
import { ImageWithSketelon } from "../shared/Image";
import { messages } from "./messages";
import { useState } from "react";

interface HeroInterfaces {
  breackPoint: BreakPoints;
}

const INITAL_SIZE: number = 500;
export const HeroAlternate = ({ breackPoint }: HeroInterfaces) => {
  const [imgSize, setImgSize] = useState<number>(INITAL_SIZE);
  const size = typeof window !== "undefined" ?
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth : 1333;

  const handleClick = () => {
    window.open("https://discord.com/invite/72yX8YgT");
  };
  return (
    <main className="alternate__hero">
      <div className="alternate_hero__content">
        {size < 1024 && size >= 768 ? (
          <ImageWithSketelon
            src="/img/CAPYillustration_3_2_vwxrl5.png"
            width={300}
            height={300}
            alt="test"
          />
        ) : (
          <ImageWithSketelon
            src="/img/CAPYillustration_3_2_vwxrl5.png"
            width={500}
            height={500}
            alt="test"
          />
        )}

        <Button
          text={messages.buttonText}
          onClick={() => handleClick()}
          className={styles.heroButton}
        />
      </div>
    </main>
  );
};
