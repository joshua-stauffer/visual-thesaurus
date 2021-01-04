import React from 'react'

export function SideBar({ title, sideBarState, changeToExample = f => f, changeToDef = f => f, content }) {
  return (
    <div className="sidebar">
      <h1>{ title }</h1>
      <button onClick={changeToDef} className={sideBarState ? "active-button" : ""}>Definition</button>
      <button onClick={changeToExample} className={!sideBarState ? "active-button" : ""}>Example</button>
      <p>{ content }</p>
    </div>
  )
}