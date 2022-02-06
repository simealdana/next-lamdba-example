import { messages } from "./messages";
import { GridList } from "./components/gridList";
import { ITEMS } from "./constans";
import { styles } from "./styles";

export const GridAlternate = () => (
  <div className={`${styles.alternateList}`}>
    <GridList items={ITEMS} classes="flex" />
    <p className="text-center text-primary">{messages.text}</p>
  </div>
);
