import { useState, useEffect } from 'react';

import { compareObjIndex } from '../utils/compareObjIndex';
import { swapPlaces } from '../utils/swapPlaces';


export function useData(dataObject, dispatch){

  // TODO: these can all be pulled out of useEffects and into plain functions
  // because the API call is already in a useEffect call

  const [moveUp, setMoveUp] = useState(null);
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


  const [moveDown, setMoveDown] = useState(null);
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


  const [makeNew, setMakeNew] = useState(false);
  useEffect(() => {
    if (!makeNew) return;
    dataObject.reload();
    const viewName = dataObject.resource + '-new'
    dispatch({type: viewName})
    setMakeNew(false)
  }, [makeNew])


  const [eleToDelete, setEleToDelete] = useState(null);
  useEffect(() => {
    if (!eleToDelete) return
    dataObject.reload();
    const viewName = dataObject.resource + '-del'
    dispatch({
      type: viewName,
      payload: {
        id: eleToDelete
      }
  })
    setEleToDelete(null);
  }, [eleToDelete])


  const save = () => {
    const { id, data, resource, reload } = dataObject;
    console.log('saving now, and data is ', data)
    reload(id);
    const viewName = resource + '-updateOne'
    dispatch(
      {
        type: viewName,
        payload: {
          id: id, 
          body: data
        }
      }
    )
  }

  // these relate to the whole data object
  const dataFuncs = {
    moveUp: (index) => setMoveUp(index),
    moveDown: (index) => setMoveDown(index),
    add: () => setMakeNew(true),
    edit: (id) => dispatch({type: dataObject.specificView, payload: {id: id}}),
    del: (id) => setEleToDelete(id),
    save: () => save()
  }

  return [dataFuncs]
}