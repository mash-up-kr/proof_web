/**
 *
 * @param array target Array
 * @param predicate 찾고자 하는 조건
 * @returns lastIndex, 조건을 만족하지 못하면 -1 반환
 */
export function findLastIndex(array: unknown[], predicate: Function) {
  const { length } = array;
  let index = length - 1;

  while (index--) {
    if (predicate(array[index])) {
      return index;
    }
  }
  return -1;
}
