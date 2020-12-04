import { useState } from 'react';
import data from '../d3/data.json'; //TODO: change this to a state reflecting an api call


export function useSideBarState() {
  const [sideBarState, setSideBarState] = useState('definition');
  const [lastState, setLastState] = useState(sideBarState);
  const [hoverState, setHoverState] = useState(data.A)
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


export function useNodeState() {
  const [activeNode, setActiveNode] = useState(data.A) 
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