import { useState } from 'react';

export function useGenericStore(dataName) {
  const [name, ] = useState(dataName)
  const [data, setState] = useState(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  const updateState = newState => {
      setState(newState)
  }

  return {
    resource: name,
    data: data,
    hasLoaded,
    dataHasLoaded: () => setHasLoaded(true),
    undo: () => console.log(`undo in resource ${name}`),
    redo: () => console.log(`redo in resource ${name}`),
    updateData: (newState) => updateState(newState)
  }
}
