

export function BlogButtons({
  delFunc,
  moveContentUp,
  moveContentDown,
  showMoveUp,
  showMoveDown
}) {
  return (
    <div>
      <button onClick={delFunc}>Delete Section</button>
      <button 
        onClick={moveContentUp}
        disabled={showMoveUp}
      >Move Section Up</button>
      <button
        onClick={moveContentDown}
        disabled={showMoveDown}
      >Move Section Down</button>
    </div>
  )
}