import './App.css';
import React from 'react';
import { ForceGraph } from './components/forceGraph';
import { SideBar } from './components/sideBar';
import { PopupSidebar } from './components/popupSidebar';
import { SearchBar } from './components/searchBar';
import { useSideBarState, useHoverSidebarState } from './components/hooks';
import data from './d3/data.json';

function App() {
  const [popUpBarId, setPopUpBarId] = useHoverSidebarState();
  const [selectedNode, setSelectedNode] = React.useState(data.A);
  const [sideBarState, changeToExample, changeToDef] = useSideBarState();

  function clickNode(node) {
    if (node in data) {
      setSelectedNode(data[node])
    }
  }

  if (!popUpBarId) {
    // no node is hovered, so render normal sidebar
    return (
      <div className="App">
        <header className="App-header">
          D3 Visual Thesaurus
        </header>
        <section className="Main">
            <ForceGraph 
              linksData={selectedNode.links}
              nodesData={selectedNode.nodes}
              clickFunc={clickNode}
              mouseOverFunc={setPopUpBarId}
            />
            <SideBar
              title={selectedNode.title}
              sideBarState={sideBarState}
              changeToExample={changeToExample}
              changeToDef={changeToDef}
              content={sideBarState ? selectedNode.definition : selectedNode.example}
            />
            <SearchBar 
              setSelectedNode={setSelectedNode}
              data={data}
            />
        </section>
      </div>
    );
  } else {
    // hover over node, so render popup sidebar
    return (
      <div className="App">
        <header className="App-header">
          D3 Visual Thesaurus
        </header>
        <section className="Main">
            <ForceGraph 
              linksData={selectedNode.links}
              nodesData={selectedNode.nodes}
              clickFunc={clickNode}
              mouseOverFunc={setPopUpBarId}
            />
            <PopupSidebar
              title={data[popUpBarId].title}
              exampleText={data[popUpBarId].example}
              definitionText={data[popUpBarId].definition}
            />
            <SearchBar 
              setSelectedNode={setSelectedNode}
              data={data}
            />
        </section>
      </div>
    );
  }
}

export default App;
