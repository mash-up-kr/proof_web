import React from "react";
import {
  Check,
  DirectionRight,
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
  search: Search,
  typeA: TypeA,
  typeB: TypeB,
  vote: Vote,
  winner: Winner,
} as const;

const Icon = ({ name, ...rest }: IconProps) => {
  return React.createElement(ICONS[name], { ...rest });
};

export default Icon;
