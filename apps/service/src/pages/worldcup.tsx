import styled from "@emotion/styled";
import { BottomButton, theme, Title } from "design-system";
import * as React from "react";
import { useRecoilState } from "recoil";
import { DrinkEvaluationDto } from "../@types/api/drinkEvaluation";
import { useGetDrinksEvaluationById } from "../api/query";
import { Header } from "../components";
import DrinkCard, { DrinkWithRound } from "../components/DrinkCard";
import DrinkInfoBottomSheet from "../components/DrinkInfoBottomSheet";
import { useNavigate, useWorldCup } from "../hooks";
import { worldCupState as recoilWorldCupState } from "../store";
import { isWinnerSelectRound } from "../utils";

const WorldCup = () => {
  const [selectedDrink, setSelectedDrink] =
    React.useState<DrinkWithRound | null>(null);
  const [drinkToReadMore, setDrinkToReadMore] =
    React.useState<DrinkWithRound | null>(null);
  const [evaluationToReadMore, setEvaluationToReadMore] =
    React.useState<DrinkEvaluationDto | null>(null);
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
  const candidateDrinksEvaluation = useGetDrinksEvaluationById(candidateDrinks);
  if (
    candidateDrinksEvaluation.some((r) => r.isLoading) ||
    candidateDrinksEvaluation.some((r) => r.data === undefined)
  )
    return null;

  const handleDrinkCardClick = (drink: DrinkWithRound) => {
    if (drink === selectedDrink) setSelectedDrink(null);
    else setSelectedDrink(drink);
  };

  const handleClickBottomButton = () => {
    const { currentRound } = worldCupState;

    updateToNextRoundState(selectedDrink?.id!);
    if (isWinnerSelectRound(currentRound)) {
      // 우승자인 경우, 결과 페이지로 이동한다.
      navigate.push(`/result/view/${selectedDrink?.id}`);
    }
    setSelectedDrink(null);
  };

  const handleClickHeaderPrevButton = () => {
    const { currentRound, totalRound, currentIndex } = worldCupState;
    revertToPrevRoundState();
    // worldcup 처음 페이지라면 선택했던 경우가 있어도, round 페이지로 돌린다.
    if (totalRound === currentRound && currentIndex === 0) {
      setWorldCupState((prev) => ({
        ...prev,
        currentRound: totalRound,
        currentIndex: 0,
      }));
      navigate.back();
      return;
    }
  };

  return (
    <>
      {isBottomSheetOpened && drinkToReadMore && (
        <DrinkInfoBottomSheet
          selectedDrink={drinkToReadMore}
          evaluation={evaluationToReadMore as DrinkEvaluationDto}
          drinkCardIcon={
            candidateDrinks[0].id === drinkToReadMore.id ? "typeA" : "typeB"
          }
          onClose={() => setBottomSheetOpened(false)}
        />
      )}
      <Layout>
        <Header
          type="prev"
          title={getTitle()}
          onClickIcon={handleClickHeaderPrevButton}
        />
        <TitleWrapper title={worldCupState.title} textAlign="center" />
        <CandidateWrapper>
          {candidateDrinks.map((drink, idx) => (
            <DrinkCard
              key={drink?.id ?? idx}
              type="round"
              drink={drink}
              isActive={selectedDrink === drink}
              iconType={idx === 0 ? "typeA" : "typeB"}
              onImageClick={() => handleDrinkCardClick(drink)}
              tags={
                candidateDrinksEvaluation[idx].data?.result
                  ?.situation as string[]
              }
              onSearchIconClick={(e) => {
                e.stopPropagation();
                setDrinkToReadMore(drink);
                setEvaluationToReadMore(
                  candidateDrinksEvaluation[idx].data as DrinkEvaluationDto
                );
                setBottomSheetOpened(true);
              }}
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

const TitleWrapper = styled(Title)`
  margin-top: 36px;
  margin-bottom: 62px;
  margin-inline: 40px;
`;

const CandidateWrapper = styled.div`
  margin-inline: 24px;
  display: flex;
  gap: 18px;
`;

export default WorldCup;
