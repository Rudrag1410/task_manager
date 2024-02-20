import React, { ReactElement, FunctionComponent } from "react";

import { IconsType } from "./types";
import MobileLogo from "./icons/MobileLogo";
import AddButton from "./icons/AddButton";
import Cross from "./icons/Cross";
import Board from "./icons/Board";
import Arrow from "./icons/Arrow";
import Dots from "./icons/Dots";

const iconsMap = new Map<IconsType, FunctionComponent<IconProps>>([
  [IconsType.MOBILE_LOGO, MobileLogo],
  [IconsType.ADD_BUTTON, AddButton],
  [IconsType.DOTS, Dots],
  [IconsType.CROSS, Cross],
  [IconsType.BOARD, Board],
  [IconsType.ARROW, Arrow],
]);

export const getIcons = (
  icons: IconsType,
  iconsProp?: IconProps
): ReactElement<IconProps> | null => {
  const IconComponent = iconsMap.get(icons);
  if (IconComponent) {
    return <IconComponent {...iconsProp} />;
  } else {
    console.error("Icon not found");
    return null;
  }
};

export interface IconProps {
  className?: string;
  pathClassName?: string;
}
