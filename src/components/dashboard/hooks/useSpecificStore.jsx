import { useEffect, useState } from 'react';


export function useSpecificStore(viewName) {
  const [view,] = useState(viewName)
  const [store, setStore] = useState([])
  
  
  




  const [dataHasLoadedID, setDataHasLoadedID] = useState(null);
  useEffect(() => {
    if (!dataHasLoadedID) return;
    setStore(store =>
      store.map(object => {
        if (object.id === dataHasLoadedID) {
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
    setDataHasLoadedID(null)
  }, [dataHasLoadedID])


  const [resetDataByID, setResetDataByID] = useState(null);
  // use this to communicate to the parent view list that something has changed
  // and a reload of data from the server is necessary
  const [resetGenericView, setResetGenericView] = useState(false)
  const genericViewHasBeenReset = () => setResetGenericView(false);
  useEffect(() => {
    if (!resetDataByID) return;
    console.log('resetting id ', resetDataByID)
    setStore(store => store.map(object => 
      object.id !== resetDataByID ? object : {...object, hasLoaded: false}
    ))
    // request reset of generic view as well
    setResetGenericView(true);
    setResetDataByID(null);
  }, [resetDataByID])


  const [changeList, setChangeList] = useState([])
  useEffect(() => {
    //console.log('store is ', store)
    const editedElements = store.filter(d => d.isEdited).map(d => d.id)
    //console.log('edited elements are ', editedElements)
    setChangeList(editedElements);
  }, [setChangeList, store])



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


  const [userInput, setUserInput] = useState(null)
  useEffect(() =>{
    if (!userInput) return;
    const { newData, field, id } = userInput

    setStore(store =>
      store.map(object => {
        if (object.id === id) {
          const newObject = {...object, isEdited: true}
          newObject.data[field] = newData;
          return newObject
        } else {
          return object
        }
      })
    )
    setUserInput(null);
  }, [userInput])


  const [togglePublished, setTogglePublished] = useState(null)
  useEffect(() => {
    if (!togglePublished) return;
    const { e, id } = togglePublished;
    
    setStore(store =>
      store.map(object => {
        if (object.id === id) {
          const newObject = {...object, isEdited: true}
          newObject.data.published = !e.target.checked
          return newObject
        } else {
          return object
        }
      })
    )
    setTogglePublished(null)
  }, [togglePublished])


  // wish this could be inside useEffect but need it to return the object
  const accessStore = id => {
    const dataObject = store.find(ele => ele.id === id)
    if (!dataObject) {
      const newDataObject = {
        id: id,
        resource: view,
        data: null,
        hasLoaded: false,
        isEdited: false,
        dataHasLoaded: (id) => setDataHasLoadedID(id),
        reload: (id) => setResetDataByID(id),
        updateData: (newData, id) => setNewData(newData, id),
        editData: (newData, field, id) => setUserInput({ newData, field, id }),
        togglePublished: (e, id) => setTogglePublished({ e, id })
      }
      setStore(store => store.concat(newDataObject))
      return newDataObject;
    }

    return dataObject
  }

  return [accessStore, changeList, resetGenericView, genericViewHasBeenReset]
}



/*

  useEffect(() => {
    if (getChangeList && getChangeList().length > 0) {
      const changeList = getChangeList();
      setState(state => {
        if (!state) return;
        console.log('continuing, state is ', state)
        const newState = state.map(d => changeList.includes(d.id) ? {...d, isEdited: true} : d)
        console.log('returning new state: ', newState)
        return newState
      })
  }}, [])
  */