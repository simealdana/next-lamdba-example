import { BreakPoints } from "../../hooks/useResize";

export interface MenuInterface {
  breackPoint: BreakPoints;
  isOpen: boolean;
  setItOpen: any;
}
export interface MenuButtonInterface {
  isOpen: boolean;
  setIsOpen: any;
}

export interface MenuListInterface {
  breackPoint: BreakPoints;
  isOpen: boolean;
}
