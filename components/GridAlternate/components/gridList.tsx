import { useCalculateImageSize } from "../../../hooks/useCalculateImageSize";
import { ImageWithSketelon } from "../../shared/Image";
import { GridListProps } from "../interfaces";
import { uuid } from "uuidv4";
import { Carousel } from "../../shared/carousel";
import { styles } from "../styles";

const ACCOUNT_ITEM: number = 4;

export const GridList = ({ items = [], classes }: GridListProps) => {
  const [width] = useCalculateImageSize(ACCOUNT_ITEM);
  return (
    <Carousel infiniteLoop={true} show={4} autoNext={true}>
      {items.map((item: any) => (
        <div
          className={styles.alternateList}
          key={uuid()}
        >
          <ImageWithSketelon
            src={item.src}
            width={width}
            height={width}
            alt={item.alt}
          />
        </div>
      ))}
    </Carousel>
  );
};
