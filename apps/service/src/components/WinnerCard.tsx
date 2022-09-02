import styled from "@emotion/styled";
import React from "react";
import DrinkCard, { Drink } from "./DrinkCard";

interface WinnerCardProps extends React.ComponentProps<"div"> {
  drink: Drink;
  tags: string[];
  select: number;
  handleClickSearchIcon?: (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => void;
}

function WinnerCard({
  drink,
  tags,
  handleClickSearchIcon,
  select = 1,
  ...restProps
}: WinnerCardProps) {
  return (
    <Wrapper {...restProps}>
      <DrinkCard
        id="0"
        type="winner"
        iconType="winner"
        drink={drink}
        tags={tags ?? []}
        onSearchIconClick={handleClickSearchIcon}
        select={select}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-inline: 24px;
  padding: 16px;
  background: linear-gradient(180deg, #5646a3 -5.5%, #2a2c3c 97.57%);
  border-radius: 16px;
  margin-top: 24px;
`;

export default WinnerCard;
