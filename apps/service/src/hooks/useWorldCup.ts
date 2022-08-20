import { useRecoilState } from "recoil";
import { DrinkWithRound } from "../components/DrinkCard";
import { worldCupState as state } from "../store";
import { getNextState, getPrevState, isWinnerSelectRound } from "../utils";
import useNavigate from "./useNavigate";

function getNextStateDrinks(prevDrinks: DrinkWithRound[], updateIndex: number) {
  const nextDrinks = [...prevDrinks];
  const currentRound =
    nextDrinks[updateIndex].rounds[nextDrinks[updateIndex].rounds.length - 1];
  nextDrinks[updateIndex] = {
    ...nextDrinks[updateIndex],
    rounds: [...nextDrinks[updateIndex].rounds, currentRound / 2],
  };
  return nextDrinks;
}

function getPrevStateDrinks(
  prevDrinks: DrinkWithRound[],
  currentIndex: number,
  updatedRound: number
) {
  const nextDrinks = [...prevDrinks];
  const candidateUpdatedIndexs = [currentIndex * 2, currentIndex * 2 + 1]; // 업데이트가 되었었던 가능성이 있는 인덱스 배열
  // 업데이트 되었던 인덱스를 찾는다.
  const updatedIndex = prevDrinks.findIndex(
    (drink, idx) =>
      (idx === candidateUpdatedIndexs[0] ||
        idx === candidateUpdatedIndexs[1]) &&
      drink.rounds.includes(updatedRound)
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
    const nextDrinks = getNextStateDrinks(drinks, selectedDrinkIndex);
    if (isWinnerSelectRound(currentRound)) {
      // 우승자인 경우, 결과를 저장하고 Result 페이지로 이동한다.
      setWorldCupState((prev) => ({
        ...prev,
        drinks: nextDrinks,
      }));
      navigate.replace("/result");
    } else {
      // 우승자가 아니라면, 다음 라운드, 다음 인덱스를 계산해서 넘어간다.
      const { round: nextRound, index: nextIndex } = getNextState({
        currentRound,
        currentIndex,
      });
      setWorldCupState((prev) => ({
        ...prev,
        currentIndex: nextIndex,
        currentRound: nextRound,
        drinks: nextDrinks,
        lastSelectedIndex: selectedDrinkIndex,
      }));
      // }
    }
  };

  const revertToPrevRoundState = () => {
    const {
      lastSelectedIndex,
      drinks,
      currentRound,
      totalRound,
      currentIndex,
    } = worldCupState;
    if (lastSelectedIndex !== -1) {
      // worldcup 처음 페이지라면 선택했던 경우가 있어도, round 페이지로 돌린다.
      if (totalRound === currentRound && currentIndex === 0) {
        navigate.replace("/round");
        return;
      }
      // 기존에 1번이라도 선택했던 경우라면 마지막 인덱스의 주류카드 round를 선택하기 전 상태로 돌린다.
      const { round: prevRound, index: prevIndex } = getPrevState({
        currentRound,
        currentIndex,
      });
      const nextDrinks = getPrevStateDrinks(drinks, prevIndex, prevRound / 2);
      setWorldCupState((prev) => ({
        ...prev,
        currentRound: prevRound,
        currentIndex: prevIndex,
        drinks: nextDrinks,
      }));
    } else {
      // 기존에 선택했던 경우가 아니라면 아무 역할을 하지 않고, 라운드 선택으로 돌아간다.
      navigate.replace("/round");
    }
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

  return {
    updateToNextRoundState,
    revertToPrevRoundState,
    getCurrentCandidate,
    getWinnerDrink,
    getTitle,
  };
};

export default useWorldCup;
