import { Icono } from "../icono";
import { IconoListProps } from "./interfaces";
import { uuid } from "uuidv4";
import { Fragment } from "react";

export const IconsList = ({ items,classes }: IconoListProps) => 
    <Fragment>
      {items.map(({ iconSvg, url }) => (
        <li className={classes} key={uuid()}>
          <Icono width={30} height={30} svgUrl={iconSvg} url={url} />
        </li>
      ))}
    </Fragment>

