import styled from "@emotion/styled";
import { BottomButton, Text, theme } from "design-system";
import * as React from "react";
import { useRecoilState } from "recoil";
import { Header } from "../components";
import DrinkCard, { DrinkWithRound } from "../components/DrinkCard";
import DrinkInfoBottomSheet from "../components/DrinkInfoBottomSheet";
import { DRINK_CARDS } from "../dummy/drinkCards";
import { useNavigate, useWorldCup } from "../hooks";
import { worldCupState as recoilWorldCupState } from "../store";
import { isWinnerSelectRound } from "../utils";

const WorldCup = () => {
  const [selectedDrink, setSelectedDrink] =
    React.useState<DrinkWithRound | null>(null);
  const [isBottomSheetOpened, setBottomSheetOpened] = React.useState(false);
  const [worldCupState, setWorldCupState] = useRecoilState(recoilWorldCupState);
  const navigate = useNavigate();
  const {
    updateToNextRoundState,
    revertToPrevRoundState,
    getCurrentCandidate,
    getTitle,
  } = useWorldCup();
  const candidateDrinks = getCurrentCandidate();

  const handleDrinkCardClick = (drink: DrinkWithRound) => {
    if (drink === selectedDrink) setSelectedDrink(null);
    else setSelectedDrink(drink);
  };

  const handleClickBottomButton = () => {
    const { currentRound } = worldCupState;

    updateToNextRoundState(selectedDrink?.id!);
    setSelectedDrink(null);
    if (isWinnerSelectRound(currentRound)) {
      // 우승자인 경우, 결과 페이지로 이동한다.
      navigate.replace("/result");
    }
  };

  const handleClickHeaderPrevButton = () => {
    revertToPrevRoundState();
  };

  React.useEffect(() => {
    // FIXME: React-Query를 연동 후 해당 부분 변경해야 함
    setWorldCupState((prev) => ({
      ...prev,
      drinks: DRINK_CARDS.map((drink) => ({
        ...drink,
        rounds: [prev.totalRound],
      })),
    }));
  }, [setWorldCupState]);

  return (
    <>
      {isBottomSheetOpened && selectedDrink && (
        <DrinkInfoBottomSheet
          drinkCardIcon={"typeA"}
          drinkName={selectedDrink.name}
          drinkInformation={selectedDrink.info}
          drinkMetaData={{
            abv: selectedDrink.abv,
            categoryName: selectedDrink.category,
            origin: selectedDrink.origin,
          }}
          onClose={() => setBottomSheetOpened(false)}
        />
      )}
      <Layout>
        <Header
          type="prev"
          title={getTitle()}
          onClickIcon={handleClickHeaderPrevButton}
        />
        <TitleWrapper>
          <Text type="h1" textAlign="center">
            비 오는 날씨엔
          </Text>
          <Text type="h1" textAlign="center">
            어떤 술이 더 끌리나요?
          </Text>
        </TitleWrapper>
        <CandidateWrapper>
          {candidateDrinks.map((drink, idx) => (
            <DrinkCard
              key={drink?.id ?? idx}
              type="round"
              drink={drink}
              isActive={selectedDrink === drink}
              iconType={idx === 0 ? "typeA" : "typeB"}
              onClick={() => handleDrinkCardClick(drink)}
              onSearchIconClick={() => setBottomSheetOpened(true)}
            />
          ))}
        </CandidateWrapper>
        <BottomButton
          isActive={!!selectedDrink}
          onClick={handleClickBottomButton}
        >
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

  background: linear-gradient(
    180deg,
    #3a2e72 0%,
    ${theme.palette.black} 40.88%
  );
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
