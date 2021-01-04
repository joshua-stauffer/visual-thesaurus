
export function compareData(eleOne, eleTwo) {
  if (eleOne.index <= eleTwo.index) {
    return -1
  }
  return 1
}