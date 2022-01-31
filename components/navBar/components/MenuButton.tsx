import Hamburger from "hamburger-react";
import { MenuButtonInterface } from "../interfaces";

export const MenuButton = ({ isOpen, setIsOpen }: MenuButtonInterface) => (
  <Hamburger color={!isOpen?'#FFFFFF':'#000000'} toggled={isOpen} toggle={setIsOpen} />
);
