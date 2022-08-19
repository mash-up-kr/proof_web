import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { BottomButton, BottomSheet, Text } from "design-system";
import * as React from "react";
import { Header } from "../components";
import DrinkCard, { Drink } from "../components/DrinkCard";
import { DRINK_CARDS } from "../dummy/drinkCards";

const WorldCup = () => {
  const [isActive, setIsActive] = React.useState<boolean[]>([false, false]);

  const handleClickDrinkCard = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const id = Number(e.currentTarget.id);
    const nextIsActive = [...isActive];
    nextIsActive[+!id] = false;
    nextIsActive[id] = !nextIsActive[id];
    setIsActive(nextIsActive);
  };

  return (
    <>
      <BottomSheet />
      <Layout>
        <Header type="prev" title="8강" />
        <TitleWrapper>
          <Text type="h1" textAlign="center">
            비 오는 날씨엔
          </Text>
          <Text type="h1" textAlign="center">
            어떤 술이 더 끌리나요?
          </Text>
        </TitleWrapper>
        <CandidateWrapper>
          <DrinkCard
            id="0"
            type="round"
            iconType="typeA"
            drink={DRINK_CARDS[0]}
            isActive={isActive[0]}
            onClick={handleClickDrinkCard}
          />
          <DrinkCard
            id="1"
            type="round"
            iconType="typeB"
            drink={DRINK_CARDS[1]}
            isActive={isActive[1]}
            onClick={handleClickDrinkCard}
          />
        </CandidateWrapper>
        <BottomButton isActive={isActive[0] || isActive[1]}>
          선택하기
        </BottomButton>
      </Layout>
    </>
  );
};

const Layout = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);

    background-color: ${theme.colors.background};
  `}
`;

const TitleWrapper = styled.div`
  padding-top: 36px;
  margin-bottom: 52px;
`;

const CandidateWrapper = styled.div`
  margin-inline: 24px;
  display: flex;
  gap: 18px;
`;

export default WorldCup;
