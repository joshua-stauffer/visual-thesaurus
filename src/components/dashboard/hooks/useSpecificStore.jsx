import { useState } from 'react';


export function useSpecificStore() {
  const [store, setStore] = useState([])

  const setDataHasLoaded = (id) => {
    setStore(store =>
      store.map(object => {
        if (object.id === id) {
          const newObject = {
            ...object,
            hasLoaded: true
          }
          return newObject
        } else {
          return object
        }
      })
    )
  }

  const setNewData = (newData, id) => {
    setStore(store =>
      store.map(object => {
        if (object.id === id) {
          const newObject = {
            ...object,
            data: newData
          }
          return newObject
        } else {
          return object
        }
      })
    )
  }

  const accessStore = id => {
    const dataObject = store.find(ele => ele.id === id)
    if (!dataObject) {
      const newDataObject = {
        id: id,
        data: null,
        hasLoaded: false,
        dataHasLoaded: (id) => setDataHasLoaded(id),
        updateData: (id, newData) => setNewData(id, newData)
      }
      setStore(store => store.concat(newDataObject))
      return newDataObject;
    }

    return dataObject
  }

  return accessStore
}