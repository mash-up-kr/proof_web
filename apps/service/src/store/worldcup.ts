import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { WithWhoType } from "../@types/api";
import { DrinkWithRound } from "../components/DrinkCard";

export interface WorldCup {
  worldCupId: number;
  currentIndex: number;
  currentRound: number;
  totalRound: number;
  with: WithWhoType | null;
  title: string;
  situation: string;
  token: string;
  drinks: DrinkWithRound[];
}

const { persistAtom } = recoilPersist({
  key: "recoil-persist-atom",
});

/**
 * currentRound: 현재 진행중인 라운드
 *
 * currentIndex: 현재 진행중인 라운드에서 가지는 인덱스
 *
 * totalRound: 유저가 선택한 라운드
 *
 * with: 누구랑 같이 먹나요?
 *
 * situation: 어떤 상황에서 먹나요?
 *
 * drinks: 선택한 라운드에 따라 백엔드에서 가져오는 주류 정보 리스트
 */
export const worldCupState = atom<WorldCup>({
  key: "worldCup",
  default: {
    worldCupId: -1,
    currentIndex: 0,
    currentRound: 0,
    totalRound: 0,
    with: null,
    title: "",
    situation: "",
    token: "",
    drinks: [],
  },
  effects: [persistAtom],
});
