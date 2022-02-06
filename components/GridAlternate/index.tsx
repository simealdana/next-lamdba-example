import { messages } from "./messages";
import { GridList } from "./components/gridList";
import { ITEMS } from "./constans";
import { styles } from "./styles";
import { FunctionComponent } from "react";
import { BreakPoints } from "../../hooks/useResize";

interface GridAlternateInterfaces {
  breackPoint: BreakPoints;
}

export const GridAlternate:FunctionComponent <GridAlternateInterfaces> = ({breackPoint}) => (
  <div className={`${styles.alternateList}`}>
    <GridList items={ITEMS} classes="flex" breackPoint={breackPoint}/>
    <p className="text-center text-primary">{messages.text}</p>
  </div>
);
