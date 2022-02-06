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
                src="https://res.cloudinary.com/doa8qp6ca/image/upload/v1644170516/capybaras/CAPYillustration_3_2_vwxrl5.png"
                width={500}
                height={500}
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
