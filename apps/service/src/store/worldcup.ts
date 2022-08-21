import { atom, selector } from "recoil";
import { DrinkWithRound } from "../components/DrinkCard";

export interface WorldCup {
  currentIndex: number;
  currentRound: number;
  totalRound: number;
  with: "alone" | "group";
  situation: string;
  drinks: DrinkWithRound[];
}

const worldCupAtom = atom<WorldCup>({
  key: "worldCup",
  default: {
    currentIndex: 0,
    currentRound: 8,
    totalRound: 8,
    with: "alone",
    situation: "",
    drinks: [],
  },
});

/**
 * currentRound: 현재 진행중인 라운드
 *
 * currentIndex: 현재 진행중인 라운드에서 가지는 인덱스
 *
 * with: 누구랑 같이 먹나요?
 *
 * situation: 어떤 상황에서 먹나요?
 *
 * drinks: 선택한 라운드에 따라 백엔드에서 가져오는 주류 정보 리스트
 */
export const worldCupState = selector<WorldCup>({
  key: "worldCupState",
  get: ({ get }) => {
    const { ...state } = get(worldCupAtom);
    return { ...state };
  },
  set: ({ set }, nextState) => {
    set(worldCupAtom, nextState);
  },
});
