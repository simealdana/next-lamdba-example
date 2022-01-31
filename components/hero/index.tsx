import Image from "next/image";
import { BreakPoints } from "../../hooks/useResize";
import { messages } from "./messages";
import { styles } from "./style";
const { title, subTiitle, date, mintInfo, buttonText } = messages;

interface HeroInterfaces {
  breackPoint: BreakPoints;
}

export const Hero = ({ breackPoint }: HeroInterfaces) => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.flexCol}>
        <h2 className={styles.heroTitle}>{title}</h2>
        {breackPoint === BreakPoints.SM && (
            <div className="flex justify-center">
                <Image src="/tiger.jpeg" alt="Vercel Logo" width={200} height={400} />
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
          <Image src="/tiger.jpeg" alt="Vercel Logo" width={500} height={400} />
        </div>
      )}
    </div>
  );
};
