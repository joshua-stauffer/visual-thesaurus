import { useState } from 'react';

const getFirstKey = d => {
  for (let k in d) {
    return k;
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
  // console.log('entering useNodeState')

  const key = getFirstKey(data);
  //console.log(data[key])
  const [activeNode, setActiveNode] = useState(data[key]) 
  //TODO: update this to reflect something in the API interface so that it
  // always selects the first (default) object in data set
 
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