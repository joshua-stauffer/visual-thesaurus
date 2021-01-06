
export function MainButtonBar({backFunc, homeFunc, saveFunc, isEdited}) {

  return (
    <nav>
      <button onClick={backFunc}>Back</button>
      <button onClick={homeFunc}>Home</button>
      <button onClick={saveFunc} disabled={isEdited === true ? false : true}>Save</button>
    </nav>
  )
}