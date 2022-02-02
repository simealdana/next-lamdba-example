import { useCalculateImageSize } from "../../../hooks/useCalculateImageSize"
import { ImageWithSketelon } from "../../shared/Image";
import { GridListProps } from "../interfaces";
const ACCOUNT_ITEM:number = 4;

export const GridList = ({items,classes}:GridListProps)=>{
    const [width] = useCalculateImageSize(ACCOUNT_ITEM);
    return(
        <div className={classes}>
            {
                items.map(item=>(
                    <div className="rounded-xl sm:m-2 m-0.5 bg-primary-background">
                        <ImageWithSketelon src={item.src} width={width} height={width} alt={item.alt}/>
                    </div>
                ))
            }
        </div>
    )
}