import { useState } from 'react';

const getFirstKey = d => {
  for (let k in d) {
    if (d[k].order === 0) return k;
  }
}

export function useSideBarState(data) {
  const key = getFirstKey(data);
  const [sideBarState, setSideBarState] = useState('definition');
  const [lastState, setLastState] = useState(sideBarState);
  const [hoverState, setHoverState] = useState(data[key])
  let hoverTitle = hoverState.title;
  let hoverDef = hoverState.definition;
  let hoverExample = hoverState.example;

  const changeToExample = () => {
    setLastState('example');
    setSideBarState('example');
  }

  const changeToDef = () => {
    setLastState('definition');
    setSideBarState('definition');
  }

  const changeToSearch = () => {
    setLastState('search');
    setSideBarState('search');
  }

  const changeToHover = id => {

    if (id in data) {
      setHoverState(data[id])
      hoverTitle = hoverState.title;
      hoverDef = hoverState.definition;
      hoverExample = hoverState.example;
      setSideBarState('hover');
    } else {
      setSideBarState(lastState);
    }
  }

  return {
    sideBarState,
    changeToExample,
    changeToDef,
    changeToSearch,
    changeToHover,
    hoverTitle,
    hoverDef,
    hoverExample
  }
}


export function useNodeState(data) {

  const key = getFirstKey(data);
  const [activeNode, setActiveNode] = useState(data[key]) 
 
  function clickNode(node) {
    if (node in data) {
      setActiveNode(data[node])
    }
  }
  const titleText = activeNode.title
  const exampleText = activeNode.example
  const defText = activeNode.definition
  const activeLinks = activeNode.links
  const activeNodes = activeNode.nodes


  return {
    titleText,
    exampleText,
    defText,
    activeLinks,
    activeNodes,
    clickNode
  }
}