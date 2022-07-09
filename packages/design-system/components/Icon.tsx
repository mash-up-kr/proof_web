import React from "react";
import { DirectionRight, Search } from "../assets/svgs";

export type IconName = keyof typeof ICONS;

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  name: IconName;
}

const ICONS = {
  directionRight: DirectionRight,
  search: Search,
} as const;

export default Icon;

export const Icon = ({ name, className, ...rest }: IconProps) => {
  return React.createElement(ICONS[name], { ...rest });
};
