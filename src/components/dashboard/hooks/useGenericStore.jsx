import { useEffect, useState } from 'react';

import { getSpecificView } from './../utils/parseView';

export function useGenericStore(dataName, changeList, resetView, viewHasBeenReset) {
  const [name, ] = useState(dataName)
  const [specificView,] = useState(getSpecificView(dataName))
  const [data, setState] = useState(null);
  const [hasLoaded, setHasLoaded] = useState(false);

 

  useEffect(() => {
    if (!resetView) return;
    setHasLoaded(false);
    viewHasBeenReset();
  }, [resetView])


  /*   for some reason, this doesn't always run when i need it to
  useEffect(() => {
    if (!data || !changeList.length) return
    setState(state => state.map(d => changeList.includes(d.id) ? {...d, isEdited: true} : {...d, isEdited: false}))
  }, [changeList]) 
  */



  const updateState = newState => {
      setState(newState)
  }

  console.log(`in generic store ${name}, and change list is `, changeList)
  console.log(`data in generic store ${name} is `, data)
  // useEffect(() => console.log('data in useGenericStore is ', data))

  return {
    resource: name,
    specificView: specificView,
    data: data,
    hasLoaded,
    isEditedList: changeList,
    dataHasLoaded: () => setHasLoaded(true),
    reload: () => setHasLoaded(false),
    undo: () => console.log(`undo in resource ${name}`),
    redo: () => console.log(`redo in resource ${name}`),
    updateData: (newState) => updateState(newState)
  }
}
