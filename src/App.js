import './App.css';
import React from 'react';
import { ForceGraph } from './components/forceGraph';
import { SideBar } from './components/sideBar';
import { useNodeState, useSideBarState } from './components/hooks';


function App() {
  const {  
    titleText,
    exampleText,
    defText,
    activeLinks,
    activeNodes,
    clickNode
  } = useNodeState();
  const {
    sideBarState,
    changeToExample,
    changeToDef,
    changeToSearch,
    changeToHover,
    hoverTitle,
    hoverDef,
    hoverExample
  } = useSideBarState();

  return (
    <div className="App">
      <header className="App-header">
        D3 Visual Thesaurus
      </header>
      <section className="Main">
          <ForceGraph 
            activeLinks={activeLinks}
            activeNodes={activeNodes}
            clickNode={clickNode}
            changeToHover={changeToHover}
          />
          <SideBar
            sideBarState={sideBarState}
            titleText={titleText}
            exampleText={exampleText}
            defText={defText}
            changeToExample={changeToExample}
            changeToDef={changeToDef}
            changeToSearch={changeToSearch}
            hoverTitle={hoverTitle}
            hoverExample={hoverExample}
            hoverDef={hoverDef}
            clickNode={clickNode}
          />
      </section>
    </div>
  );
}

export default App;