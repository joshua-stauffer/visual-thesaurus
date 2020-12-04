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
      <h1>{ titleText }</h1>
      <p>{ exampleText }</p>
    </div>
  )
}