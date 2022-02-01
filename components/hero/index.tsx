import Image from "next/image";
import { BreakPoints } from "../../hooks/useResize";
import { ImageWithSketelon } from "../shared/Image";
import { messages } from "./messages";
import { styles } from "./style";
const { title, subTiitle, date, mintInfo, buttonText } = messages;

interface HeroInterfaces {
  breackPoint: BreakPoints;
}

const loader = () => <h1>Hola</h1>;
export const Hero = ({ breackPoint }: HeroInterfaces) => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.flexCol}>
        <h2 className={styles.heroTitle}>{title}</h2>
        {breackPoint === BreakPoints.SM && (
          <div className="flex justify-center">
            <ImageWithSketelon
              src="/img/heroSecction-Capybaraimage.png"
              alt="Vercel Logo"
              width={300}
              height={300}
            />
          </div>
        )}
        <div className={styles.heroContent}>
          <div className={styles.heroContentDescription}>
            <h4 className={styles.heroH4}>{subTiitle}</h4>
            <p className={styles.heroP}>{date}</p>
            <h5 className={styles.heroH5}>{mintInfo}</h5>
            <button className={styles.heroButton}>{buttonText}</button>
          </div>
        </div>
      </div>
      {breackPoint !== BreakPoints.SM && (
        <div className={styles.heroImage}>
          <ImageWithSketelon
            alt="Vercel Logo"
            src="/img/heroSecction-Capybaraimage.png"
            width={500}
            height={400}
          />
        </div>
      )}
    </div>
  );
};
