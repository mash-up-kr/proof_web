/**
 *
 * 내 순위표에 나올 n강의 종류에 대한 배열을 반환합니다.
 * eg) 16강 월드컵을 종료한 유저의 경우, 8강 4강이 나타나야 하므로 [0, 8, 4]를 반환 (0은 전체)
 *
 * @param round 유저가 실제로 진행한 월드컵이 몇 강인지
 * @returns 내 순위표에 나올 n강 종류 eg) [0, 8, 4]
 *
 */

export const getRankingRounds = (round: number) => {
  const maxIndex = Math.log2(round);
  const maxIndexArray = [...Array(maxIndex)].map((v, i) => Math.pow(2, i));
  const result = maxIndexArray.slice(2).reverse();
  return [0, ...result];
};

export default getRankingRounds;
