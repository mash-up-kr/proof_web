import styled from "@emotion/styled";
import React from "react";
import { theme, Text } from "design-system";
import DrinkCard, { Drink } from "./DrinkCard";
import { ROUNDS } from "../dummy/rounds";

interface RankingsProps extends React.ComponentProps<"div"> {
  rounds: typeof ROUNDS;
  drinks: Drink[];
  handleClickSearchIcon?: (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => void;
}

function Rankings({
  rounds,
  drinks,
  handleClickSearchIcon,
  ...restProps
}: RankingsProps) {
  return (
    <Wrapper {...restProps}>
      <Title>
        <Text type="h2">내 순위표</Text>
      </Title>
      <Rounds>
        {rounds.map(({ label, selected }) => (
          <Text
            key={`select rounds - ${label}`}
            type="body3"
            color={
              selected ? theme.colors.text.highlight : theme.palette.gray100
            }
            style={{ marginRight: 20 }}
          >
            {label}
          </Text>
        ))}
      </Rounds>
      <DrinkCardList>
        {drinks.map((drink, idx) => (
          <DrinkCardItem key={`drink ranking - ${idx}`}>
            <DrinkCard
              id="0"
              type="ranking"
              iconType="winner"
              drink={drink}
              isShowingTag={false}
            />
          </DrinkCardItem>
        ))}
      </DrinkCardList>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Title = styled.div`
  padding-top: 36px;
  padding-inline: 24px;
`;

const Rounds = styled.div`
  display: flex;
  margin-top: 21px;
  padding-inline: 24px;
`;

const DrinkCardList = styled.div`
  overflow-y: scroll;
  display: flex;
  margin-top: 20px;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  ::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`;

const DrinkCardItem = styled.div`
  margin-right: 12px;
  :first-child {
    padding-left: 24px;
  }
  :last-child {
    padding-right: 24px;
  }
`;

export default Rankings;
