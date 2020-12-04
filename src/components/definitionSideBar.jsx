import { SideBarButtons } from './sideBarButtons';

export function DefSideBar({
  titleText,
  defText,
  ...props
}) {
  return (
    <div className="sidebar">
      <SideBarButtons
        {...props}
      />
      <h1>{ titleText }</h1>
      <p>{ defText }</p>
    </div>
  )
}