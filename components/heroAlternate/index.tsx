import { BreakPoints } from "../../hooks/useResize";
import { styles } from "./style";
import { Button } from "../shared/button";
import { ImageWithSketelon } from "../shared/Image";
import { messages } from "./messages";

interface HeroInterfaces {
  breackPoint: BreakPoints;
}
export const HeroAlternate = ({ breackPoint }: HeroInterfaces) => {
  const handleClick = () => {
    window.open("https://discord.com/", "_blank");
  };
  return (
    <main className="alternate__hero">
        <div className="alternate_hero__content">
            <ImageWithSketelon
                src="/img/heroSecction-Capybaraimage.png"
                width={400}
                height={400}
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
