import { WorldCup } from "../store";

export interface RoundState {
  round: number;
  index: number;
}

type CurrentRoundState = Pick<WorldCup, "currentRound" | "currentIndex">;

/**
 * 현재 라운드에서 마지막 인덱스인지 판단하는 함수
 * @example 8강이라면 0, 1, 2, 3 인덱스를 가지므로 3일때 마지막 인덱스로 생각한다.
 * @param currentRound 현재 라운드
 * @param currenIndex 현재 라운드에 따른 인덱스
 * @returns boolean 값
 */
export function isMaxIndexOfCurrentRound({
  currentRound,
  currentIndex,
}: CurrentRoundState) {
  return currentRound / 2 === currentIndex + 1;
}

/**
 * 다음 라운드와 인덱스를 반환하는 함수
 * 해당 라운드의 마지막 인덱스면, return 0
 * 마지막 인덱스가 아니면 return prev + 1
 *
 * @example 8강 2 인덱스면 => 8강 3 인덱스를 반환
 * @example 8강 3 인덱스면 => 4강 0 인덱스를 반환,
 * @param currentRound 현재 라운드
 * @param currenIndex 현재 라운드에 따른 인덱스
 * @returns RoundState(round, index)
 */
export function getNextState({
  currentRound,
  currentIndex,
}: CurrentRoundState): RoundState {
  return isMaxIndexOfCurrentRound({ currentRound, currentIndex })
    ? { round: currentRound / 2, index: 0 }
    : { round: currentRound, index: currentIndex + 1 };
}

// currentRound가 2면, 마지막 라운드
export function isWinnerSelectRound(round: number) {
  return round === 2;
}

/**
 * 이전 라운드와 인덱스를 반환하는 함수
 *
 * 처음 선택화면에서 뒤로가기를 눌른 상태는, useWorldCup에서 현재 예외처리를 하고 있다.
 *
 * @example 8강 1 인덱스면 => 8강 0 인덱스를 반환
 * @example 8강 0 인덱스면 => 16강 7 인덱스를 반환,
 * @param currentRound 현재 라운드
 * @param currenIndex 현재 라운드에 따른 인덱스
 * @returns RoundState(round, index)
 */
export function getPrevState({
  currentRound,
  currentIndex,
}: CurrentRoundState) {
  if (currentIndex === 0) {
    return { round: currentRound * 2, index: currentRound - 1 };
  } else {
    return { round: currentRound, index: currentIndex - 1 };
  }
}
