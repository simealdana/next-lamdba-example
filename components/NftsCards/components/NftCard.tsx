import { FunctionComponent } from "react";
import { uuid } from "uuidv4";
import { Icono } from "../../shared/icono";
import {NftCardProps} from '../interfaces';
import { styles } from "./styles";

export const NftCard:FunctionComponent<NftCardProps> = ({description,icon})=>(
    <div className={styles.card} key={uuid()}>
        <Icono svgUrl={icon} url={""} width={50} height={50}/>
        <p className={styles.description}>{description}</p>
    </div>
)