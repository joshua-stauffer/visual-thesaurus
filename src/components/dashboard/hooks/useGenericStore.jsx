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

  useEffect(() => {
    if (!data || !changeList.length) return
    setState(state => state.map(d => changeList.includes(d.id) ? {...d, isEdited: true} : d))
  }, [changeList])

  const updateState = newState => {
      setState(newState)
  }

  // useEffect(() => console.log('data in useGenericStore is ', data))

  return {
    resource: name,
    specificView: specificView,
    data: data,
    hasLoaded,
    dataHasLoaded: () => setHasLoaded(true),
    reload: () => setHasLoaded(false),
    undo: () => console.log(`undo in resource ${name}`),
    redo: () => console.log(`redo in resource ${name}`),
    updateData: (newState) => updateState(newState)
  }
}
