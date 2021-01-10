import { useApi } from './apiHook';
import { useNodeState, useSideBarState } from './hooks';
import { ForceGraph } from './forceGraph';
import { SideBar } from './sideBar';


export function LoadedApp() {
  console.log('entered loaded app')
  const { data } = useApi()
  const {  
    titleText,
    exampleText,
    defText,
    activeLinks,
    activeNodes,
    clickNode
  } = useNodeState(data);
  const {
    sideBarState,
    changeToExample,
    changeToDef,
    changeToSearch,
    changeToHover,
    hoverTitle,
    hoverDef,
    hoverExample
  } = useSideBarState(data);

  return (
    <section className="Main">
        <ForceGraph 
          activeLinks={activeLinks}
          activeNodes={activeNodes}
          clickNode={clickNode}
          changeToHover={changeToHover}
        />
        <SideBar
          className="sidebar"
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
  )
}