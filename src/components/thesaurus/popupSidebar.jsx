
export function PopupSidebar({ title, exampleText, definitionText }) {
  return (
    <div className="sidebar">
      <h1>{ title }</h1>
      <h2 className="popup-subtitle">Click this word to read more:</h2>
      <p className="popup-sidebar-text">{ definitionText }</p>
      <hr/>
      <p className="popup-sidebar-text">{ exampleText }</p>
    </div>
  )
}