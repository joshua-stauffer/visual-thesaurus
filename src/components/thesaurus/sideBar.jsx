import { ExampleSideBar } from './exampleSideBar';
import { DefSideBar } from './definitionSideBar';
import { SearchSideBar } from './searchSideBar';
import { HoverSideBar } from './hoverSideBar';


export function SideBar({
  titleText,
  exampleText,
  defText,
  hoverTitle,
  hoverExample,
  hoverDef,
  ...props
}) {
  const sideBarState = props.sideBarState

  if (sideBarState === 'example') {
      return (
      <ExampleSideBar
        titleText={titleText}
        exampleText={exampleText}
        {...props}
    />
      )
  } else if (sideBarState === 'definition') {
    return (
      <DefSideBar
        titleText={titleText}
        defText={defText}
        {...props}
      />
    )
  } else if (sideBarState === 'search') {
    return <SearchSideBar {...props}/>
  } else if (sideBarState === 'hover') {
    return (
      <HoverSideBar
        hoverTitle={hoverTitle}
        hoverDef={hoverDef}
        hoverExample={hoverExample}
      />
    )
  }   
}