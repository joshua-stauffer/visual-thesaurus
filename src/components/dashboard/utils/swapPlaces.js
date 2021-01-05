export function swapPlaces(objList, indexOne, indexTwo) {
  // console.log('SWAP-PLACES: old list: ', objList)
  const newObjList = [...objList];
  
  const indexList = newObjList.map(o => o.index)
  // console.log('SWAP-PLACES: got an index list of ', indexList);
  const objOneIndex = indexList.indexOf(indexOne);
  const objTwoIndex = indexList.indexOf(indexTwo);
  // console.log('SWAP-PLACES: objOne index: ', objOneIndex, ' objTwo index: ', objTwoIndex)

  
  newObjList[objOneIndex].index = indexTwo;
  newObjList[objTwoIndex].index = indexOne;
  // console.log('SWAP-PLACES: new list: ', newObjList)
  return newObjList
}