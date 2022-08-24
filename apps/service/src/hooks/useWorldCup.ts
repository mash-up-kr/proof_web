import { useRecoilState } from "recoil";
import { DrinkWithRound } from "../components/DrinkCard";
import { worldCupState as state } from "../store";
import {
  getNextRoundState,
  getPrevRoundState,
  isWinnerSelectRound,
  findLastIndex,
} from "../utils";
import useNavigate from "./useNavigate";

function getNextDrinksState(prevDrinks: DrinkWithRound[], updateIndex: number) {
  const nextDrinks = [...prevDrinks];
  const currentRound =
    nextDrinks[updateIndex].rounds[nextDrinks[updateIndex].rounds.length - 1];
  nextDrinks[updateIndex] = {
    ...nextDrinks[updateIndex],
    rounds: [...nextDrinks[updateIndex].rounds, currentRound / 2],
  };
  return nextDrinks;
}

function getPrevDrinksState(prevDrinks: DrinkWithRound[], prevRound: number) {
  const nextDrinks = [...prevDrinks];
  // 업데이트 되었던 인덱스를 찾는다.
  const updatedIndex = findLastIndex(nextDrinks, (drink: DrinkWithRound) =>
    drink.rounds.includes(prevRound / 2)
  );
  nextDrinks[updatedIndex] = {
    ...nextDrinks[updatedIndex],
    rounds: [...nextDrinks[updatedIndex].rounds.slice(0, -1)],
  };
  return nextDrinks;
}

const useWorldCup = () => {
  const navigate = useNavigate();
  const [worldCupState, setWorldCupState] = useRecoilState(state);

  const updateToNextRoundState = (selectedDrinkId: number) => {
    // currentIndex가 해당 라운드 마지막 인덱스인지 판별
    const { currentIndex, currentRound, drinks } = worldCupState;
    const selectedDrinkIndex = drinks.findIndex(
      (drink) => drink.id === selectedDrinkId
    );
    const { round: nextRound, index: nextIndex } = getNextRoundState({
      currentRound,
      currentIndex,
    });
    setWorldCupState((prev) => ({
      ...prev,
      currentIndex: nextIndex,
      currentRound: nextRound,
      drinks: getNextDrinksState(drinks, selectedDrinkIndex),
    }));
  };

  const revertToPrevRoundState = () => {
    const { drinks, currentRound, totalRound, currentIndex } = worldCupState;
    // worldcup 처음 페이지라면 선택했던 경우가 있어도, round 페이지로 돌린다.
    if (totalRound === currentRound && currentIndex === 0) {
      navigate.back();
      return;
    }
    // 기존에 1번이라도 선택했던 경우라면 마지막 인덱스의 주류카드 round를 선택하기 전 상태로 돌린다.
    const { round: prevRound, index: prevIndex } = getPrevRoundState({
      currentRound,
      currentIndex,
    });
    setWorldCupState((prev) => ({
      ...prev,
      currentRound: prevRound,
      currentIndex: prevIndex,
      drinks: getPrevDrinksState(drinks, prevRound),
    }));
  };

  const getCurrentCandidate = () => {
    const { currentRound, currentIndex, drinks } = worldCupState;
    const drinksWithCurrentRound = drinks.filter((drink) =>
      drink.rounds.includes(currentRound)
    );
    const firstIndex = currentIndex * 2;
    const secondIndex = currentIndex * 2 + 1;

    return [
      drinksWithCurrentRound[firstIndex],
      drinksWithCurrentRound[secondIndex],
    ];
  };

  const getWinnerDrink = () => {
    return worldCupState.drinks.find((drink) => drink.rounds.includes(1));
  };

  const getTitle = () => {
    const { currentRound } = worldCupState;
    if (isWinnerSelectRound(currentRound)) return "결승";
    return `${currentRound}강`;
  };

  const getTop8Drinks = () => {
    const top8Drinks = worldCupState.drinks
      .sort((a, b) => b.rounds.length - a.rounds.length)
      .slice(0, 8);
    return top8Drinks;
  };

  return {
    updateToNextRoundState,
    revertToPrevRoundState,
    getCurrentCandidate,
    getWinnerDrink,
    getTitle,
    getTop8Drinks,
  };
};

export default useWorldCup;
