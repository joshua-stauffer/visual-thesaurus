
export function HoverSideBar({
  hoverTitle,
  hoverDef,
  hoverExample
}) {
  return (
    <div className="sidebar">
      <aside className="popup-aside">
        <h1>{ hoverTitle }</h1>
        <p className="popup-sidebar-text">{ hoverDef }</p>
        <hr/>
        <p className="popup-sidebar-text">{ hoverExample }</p>
      </aside>
    </div>
  )
}