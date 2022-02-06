import { useCalculateImageSize } from "../../../hooks/useCalculateImageSize";
import { ImageWithSketelon } from "../../shared/Image";
import { GridListProps } from "../interfaces";
import { uuid } from "uuidv4";
import { Carousel } from "../../shared/carousel";
import { styles } from "../styles";
import { BreakPoints } from "../../../hooks/useResize";
import { useEffect, useState } from "react";

const ACCOUNT_ITEM: number = 4;

export const GridList = ({ items = [], classes,breackPoint }: GridListProps) => {
  const [accountCard,setAccountCard]=useState<number>(ACCOUNT_ITEM);
  const [width] = useCalculateImageSize(accountCard);

  const handleChangeCardToShow = ()=>{
    if (breackPoint === BreakPoints.SM) {
      setAccountCard(1)
    }
  }

  useEffect(()=>{
    handleChangeCardToShow();
  },[breackPoint]);
  return (
    <Carousel infiniteLoop={true} show={accountCard} autoNext={true}>
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
