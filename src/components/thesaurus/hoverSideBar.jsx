
export function HoverSideBar({
  hoverTitle,
  hoverDef,
  hoverExample
}) {
  return (
    <div className="sidebar">
      
      <aside className="popup-aside">
        <h1 className="sidebar-title">{ hoverTitle }</h1>
        <p>Click to learn more about this word</p>
        <h4 className="popup-subtitle">Definition</h4>
        <p className="sidebar-text">{ hoverDef }</p>
        <hr/>
        <h4 className="popup-subtitle">Example</h4>
        <p className="sidebar-text">{ hoverExample }</p>
        <hr/>
      </aside>
    </div>
  )
}