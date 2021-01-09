import { useEffect, useState } from 'react';

import { getSpecificView } from './../utils/parseView';

export function useGenericStore(dataName, changeList, resetView, viewHasBeenReset) {
  const [name, ] = useState(dataName)
  const [specificView,] = useState(getSpecificView(dataName))
  const [store, setStore] = useState(null);
  const [hasLoaded, setHasLoaded] = useState(false);

 

  useEffect(() => {
    if (!resetView) return;
    setHasLoaded(false);
    viewHasBeenReset();
  }, [resetView])



  return {
    resource: name,
    specificView: specificView,
    data: store,
    hasLoaded,
    isEditedList: changeList,
    dataHasLoaded: () => setHasLoaded(true),
    reload: () => setHasLoaded(false),
    undo: () => console.log(`undo in resource ${name}`),
    redo: () => console.log(`redo in resource ${name}`),
    updateData: (newState) => setStore(newState),
    setStore: setStore
  }
}
