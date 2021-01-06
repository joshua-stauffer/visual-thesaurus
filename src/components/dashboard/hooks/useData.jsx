import { useState, useEffect } from 'react';

import { compareObjIndex } from '../utils/compareObjIndex';
import { swapPlaces } from '../utils/swapPlaces';


export function useData(dataObject, dispatch){


  
  

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
    dispatch({type: viewName, payload: eleToDelete})
    setEleToDelete(null);
  }, [eleToDelete])


  const [save, setSave] = useState(null);
  useEffect(() => {
    if (!save) return;
    const { id, data, resource, reload } = dataObject;
    reload(id);
    const viewName = resource + '-save'
    dispatch(
      {
        type: viewName,
        payload: {
          id: id, 
          body: {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
          }
        }
      })
    setSave(null);
  }, [save])


  
  const dataFuncs = {
    moveUp: (index) => setMoveUp(index),
    moveDown: (index) => setMoveDown(index),
    add: () => setMakeNew(true),
    edit: (id) => dispatch({type: dataObject.specificView, payload: id}),
    del: (id) => setEleToDelete(id),
    save: () => setSave(true)
  }

  return [dataFuncs]
}