import { Fragment } from "react";
import { BreakPoints } from "../../../hooks/useResize";
import { messages } from "../messages";
import { style } from "../style";
import { MenuListInterface } from "../interfaces";

export const MenuList = ({ breackPoint, isOpen }: MenuListInterface) => {
const classes = breackPoint === BreakPoints.SM ? isOpen? style.listMobileOpen:style.listMobileClose : style.list;
const showList = breackPoint === BreakPoints.SM ? isOpen : true; 
  return (
    <Fragment>
      {showList && (
        <ul className={classes}>
          {breackPoint !== BreakPoints.SM && <li>{messages.help}</li>}
          <li>{messages.rodmap}</li>
          <li>{messages.term}</li>
          <li>{messages.about}</li>
          <li>{messages.faq}</li>
        </ul>
      )}
    </Fragment>
  );
};
