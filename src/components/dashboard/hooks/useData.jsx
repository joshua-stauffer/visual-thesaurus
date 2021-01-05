import { useState, useEffect } from 'react';

import { compareObjIndex } from '../utils/compareObjIndex';
import { swapPlaces } from '../utils/swapPlaces';


export function useData(dataObject, dispatch){

  const [moveUp, setMoveUp] = useState(null);
  const [moveDown, setMoveDown] = useState(null);

  
  useEffect(() => {
    if (!moveUp) return;
    const { data, updateData } = dataObject;

    const indexOne = moveUp;
    const eleOneId = data.find(ele => ele.index === indexOne).id
    const indexTwo = moveUp - 1
    const eleTwoId = data.find(ele => ele.index === indexTwo).id

    const newData = swapPlaces(data, indexOne, indexTwo);
    const eleOne = newData.find(ele => ele.id === eleOneId)
    eleOne.edited = true;
    const eleTwo = newData.find(ele => ele.id === eleTwoId)
    eleTwo.edited = true;
    newData.sort(compareObjIndex)
    updateData(newData)
    // console.log(' new data: ', newData)
    setMoveUp(null);
  }, [moveUp])


  useEffect(() => {
    if (!moveDown && moveDown !== 0) return;

    const { data, updateData } = dataObject;

    const indexOne = moveDown;
    const eleOneId = data.find(ele => ele.index === indexOne).id
    const indexTwo = moveDown + 1
    const eleTwoId = data.find(ele => ele.index === indexTwo).id

    const newData = swapPlaces(data, indexOne, indexTwo);
    const eleOne = newData.find(ele => ele.id === eleOneId)
    eleOne.edited = true;
    const eleTwo = newData.find(ele => ele.id === eleTwoId)
    eleTwo.edited = true;
    newData.sort(compareObjIndex)
    updateData(newData)
    // console.log(' new data: ', newData)
    setMoveDown(null);
  }, [moveDown])


  const dataFuncs = {
    moveUp: (index) => setMoveUp(index),
    moveDown: (index) => setMoveDown(index),
    add: (id) => console.log('add below', id),
    edit: (id) => dispatch({type: 'quotes-sp', payload: id}),
    del: (id) => console.log('delete ', id)
  }

  return [dataFuncs]
}