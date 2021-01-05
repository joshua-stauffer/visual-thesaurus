
export function MainButtonBar({backFunc, homeFunc, saveFunc}) {

  return (
    <nav>
      <button onClick={backFunc}>Back</button>
      <button onClick={homeFunc}>Home</button>
      <button onClick={saveFunc}>Save</button>
    </nav>
  )
}