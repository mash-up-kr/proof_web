import styled from "@emotion/styled";
import {BottomButton, Text} from "design-system";
import * as React from "react";
import { Header } from "../components";
import DrinkCard, { Drink } from "../components/DrinkCard";
import DrinkInfoBottomSheet from "../components/DrinkInfoBottomSheet";
import { DRINK_CARDS } from "../dummy/drinkCards";

const WorldCup = () => {
  const [selectedDrink, setSelectedDrink] = React.useState<Drink | null>(null);
  const [isBottomSheetOpened, setBottomSheetOpened] = React.useState(false);

  const handleDrinkCardClick = (drink: Drink) => {
    if (drink === selectedDrink) setSelectedDrink(null);
    else setSelectedDrink(drink);
  };

  return (
      <>
        {isBottomSheetOpened && selectedDrink && (
            <DrinkInfoBottomSheet
                drinkCardType={"typeA"}
                drinkName={selectedDrink.name}
                drinkInformation={selectedDrink.info}
                drinkMetaData={
                  {abv: selectedDrink.abv, categoryName: selectedDrink.category.name, origin: selectedDrink.origin}
                }
                onClose={() => setBottomSheetOpened(false)}
            />
        )}
        <Layout>
          <Header type="prev" title="8강"/>
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
                type="typeA"
                drink={DRINK_CARDS[0]}
                iconType="typeA"
                isActive={selectedDrink === DRINK_CARDS[0]}
                onClick={() => handleDrinkCardClick(DRINK_CARDS[0])}
                onSearchIconClick={() => setBottomSheetOpened(true)}
            />
            <DrinkCard
                type="typeB"
                drink={DRINK_CARDS[1]}
                iconType="typeB"
                isActive={selectedDrink === DRINK_CARDS[1]}
                onClick={() => handleDrinkCardClick(DRINK_CARDS[1])}
                onSearchIconClick={() => setBottomSheetOpened(true)}
            />
          </CandidateWrapper>
          <BottomButton isActive={!!selectedDrink}>
            선택하기
          </BottomButton>
        </Layout>
      </>
  );
};

const Layout = styled.div`
  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  overscroll-behavior: contain;

  background: linear-gradient(180deg, #3A2E72 0%, ${theme.palette.black} 40.88%);
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
