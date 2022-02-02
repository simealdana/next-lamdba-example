import { GridList } from "./components/gridList"
import { GridAlternateItem } from "./interfaces";

const ITEMS:GridAlternateItem[] = [
    {
        src:"/img/heroSecction-Capybaraimage.png",
        alt: "/img/heroSecction-Capybaraimage.png"
    },
    {
        src:"/img/heroSecction-Capybaraimage.png",
        alt: "/img/heroSecction-Capybaraimage.png"
    },
    {
        src:"/img/heroSecction-Capybaraimage.png",
        alt: "/img/heroSecction-Capybaraimage.png"
    },
    {
        src:"/img/heroSecction-Capybaraimage.png",
        alt: "/img/heroSecction-Capybaraimage.png"
    },
    {
        src:"/img/heroSecction-Capybaraimage.png",
        alt: "/img/heroSecction-Capybaraimage.png"
    },
];
export const GridAlternate = ()=>{
    return(
        <div className="alternate__grid__list py-5">
            <div className="left">
                <GridList items={ITEMS} classes="flex"/>
            </div>
            <div className="right">
                <GridList items={ITEMS} classes="flex"/>
            </div>
            <div className="left">
                <GridList items={ITEMS} classes="flex"/>
            </div>

        </div>
    )
}