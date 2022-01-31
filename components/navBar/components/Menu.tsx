import { Fragment} from "react";
import { BreakPoints } from "../../../hooks/useResize";
import { MenuInterface } from "../interfaces";
import { MenuButton } from "./MenuButton";
import { MenuList } from "./MenuList";

export const Menu = ({ breackPoint, isOpen, setItOpen }: MenuInterface) => {
  return (
    <Fragment>
      {breackPoint === BreakPoints.SM && (
        <MenuButton isOpen={isOpen} setIsOpen={setItOpen} />
      )}
      <MenuList breackPoint={breackPoint} isOpen={isOpen} />
    </Fragment>
  );
};
