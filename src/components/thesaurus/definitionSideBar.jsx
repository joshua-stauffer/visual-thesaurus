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
      <h1 className="sidebar-title">{ titleText }</h1>
      <p className="sidebar-text">{ defText }</p>
    </div>
  )
}