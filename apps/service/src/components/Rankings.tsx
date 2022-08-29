import styled from "@emotion/styled";
import React from "react";
import { theme, Text } from "design-system";
import DrinkCard, { DrinkWithRound } from "./DrinkCard";
import getRankingRounds from "../utils/getRankingRounds";
import { useWorldCup } from "../hooks";

interface RankingsProps extends React.ComponentProps<"div"> {
  round: number;
}

function Rankings({ round, ...restProps }: RankingsProps) {
  const { getTopNDrinks } = useWorldCup();

  const allDrinks = getTopNDrinks(round);
  const rounds = getRankingRounds(round);

  const [selectedRound, setSelectedRound] = React.useState<number>(0);
  const [selectedDrinks, setSelectedDrinks] =
    React.useState<DrinkWithRound[]>(allDrinks);

  const handleClick = (round: number) => {
    setSelectedRound(round);
    if (round === 0) {
      setSelectedDrinks(allDrinks);
      return;
    }
    setSelectedDrinks(getTopNDrinks(round));
  };

  return (
    <Wrapper {...restProps}>
      <Title>
        <Text type="h2">내 순위표</Text>
      </Title>
      <Rounds>
        {rounds.map((round) => (
          <Text
            key={`select rounds - ${round}`}
            type="body3"
            color={
              round === selectedRound
                ? theme.colors.text.highlight
                : theme.palette.gray100
            }
            style={{ marginRight: 20 }}
            onClick={() => handleClick(round)}
          >
            {round === 0 ? "전체" : `${round}강`}
          </Text>
        ))}
      </Rounds>
      <DrinkCardList>
        {selectedDrinks.map((drink, idx) => (
          <DrinkCardItem key={`drink ranking - ${idx}`}>
            <DrinkCard
              id="0"
              type="ranking"
              iconType="winner"
              drink={drink}
              isShowingTag={false}
              hasSearchIcon={false}
            />
          </DrinkCardItem>
        ))}
      </DrinkCardList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-bottom: 40px;
`;

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
  :first-of-type {
    margin-left: 24px;
  }
  :last-of-type {
    margin-right: 24px;
  }
`;

export default Rankings;
