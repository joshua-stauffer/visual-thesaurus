import { SideBarButtons } from './sideBarButtons';

export function ExampleSideBar({
  titleText,
  exampleText,
  ...props
}) {
  return (
    <div className="sidebar">
      <SideBarButtons
        {...props}
      />
      <h1 className="sidebar-title">{ titleText }</h1>
      <p className="sidebar-text">{ exampleText }</p>
    </div>
  )
}