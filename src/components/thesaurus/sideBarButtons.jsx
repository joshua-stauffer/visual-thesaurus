
export function SideBarButtons({
  changeToDef,
  changeToExample,
  changeToSearch,
  sideBarState
}) {
  return (
    <>
      <button
        onClick={changeToDef}
        className={sideBarState === 'definition' ? "active-button" : ""}
      >
        Definition
      </button>

      <button 
        onClick={changeToExample}
        className={sideBarState === 'example' ? "active-button" : ""}
      >
        Example
      </button>
      <button
        onClick={changeToSearch}
        className={sideBarState === 'search' ? "active-button" : ""}
      >
        Search
      </button>
    </>
  )
}