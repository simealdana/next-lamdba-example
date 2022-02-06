import { FunctionComponent } from "react";
import { messages } from "./messages";
import { NftCard } from "./components/NftCard";
import { NFT_CARD_LIST } from "./constants";
import { styles } from "./styles";
import { uuid } from "uuidv4";

export const NftsCards:FunctionComponent<any> = ()=>(
    <section className={styles.container}>
        <h2 className={styles.title}>{messages.title}</h2>
        <div className={styles.list}>
            {
                NFT_CARD_LIST.map(n =>(
                    <NftCard {...n} key={uuid()}/>
                ))
            }
        </div>
    </section>
)