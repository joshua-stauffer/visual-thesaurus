
export function compareObjOrder(eleOne, eleTwo) {
  if (eleOne.order <= eleTwo.order) {
    return -1
  }
  return 1
}