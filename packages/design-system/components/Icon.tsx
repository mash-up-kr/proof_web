import React from "react";
import {
  Check,
  Close,
  DirectionLeft,
  DirectionRight,
  Logo,
  Search,
  TypeA,
  TypeB,
  Vote,
  Winner,
} from "../assets/svgs";

export type IconName = keyof typeof ICONS;

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  name: IconName;
}

const ICONS = {
  check: Check,
  directionRight: DirectionRight,
  directionLeft: DirectionLeft,
  search: Search,
  typeA: TypeA,
  typeB: TypeB,
  vote: Vote,
  winner: Winner,
  close: Close,
  logo: Logo,
} as const;

const Icon = ({ name, ...rest }: IconProps) => {
  return React.createElement(ICONS[name], { ...rest });
};

export default Icon;
