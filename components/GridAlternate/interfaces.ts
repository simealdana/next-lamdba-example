import { BreakPoints } from "../../hooks/useResize";

export interface GridAlternateItem{
    src:string;
    alt:string;
}

export interface GridListProps{
    items:GridAlternateItem[];
    classes:string;
    breackPoint: BreakPoints;
}