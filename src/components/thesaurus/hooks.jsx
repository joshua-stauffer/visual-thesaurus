import { useState } from 'react';
import data from '../../d3/data.json';


export function useSideBarState() {
  const [sideBarState, setSideBarState] = useState(true)

  const changeToExample = () => setSideBarState(false);
  const changeToDef = () => setSideBarState(true);

  return [sideBarState, changeToExample, changeToDef]
}

export function useHoverSidebarState() {
  const [hoverSidebarState, setHoverSidebarState] = useState(null);

  const hoverFunc = id => {
    if (id in data) {
      setHoverSidebarState(id)
    } else {
      setHoverSidebarState(null)
    }
  }

  return [hoverSidebarState, hoverFunc]
}