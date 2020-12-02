import './App.css';
import React from 'react';
import { ForceGraph } from './components/forceGraph';
import { SideBar } from './components/sideBar'
import data from './d3/data.json'

function App() {
  const [sidebarId, setSidebarId] = React.useState(null)
  const [selectedNode, setSelectedNode] = React.useState(data.A)

  function clickNode(node) {
    if (node in data) {
      console.log('found it')
      setSelectedNode(data[node])
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        D3 Visual Thesaurus
      </header>
      <section className="Main">
          <ForceGraph 
            linksData={selectedNode.links}
            nodesData={selectedNode.nodes}
            setSidebarId={setSidebarId}
            clickNode={clickNode}
          />
          <SideBar
            title={sidebarId}
          />
      </section>
    </div>
  );
}

export default App;
