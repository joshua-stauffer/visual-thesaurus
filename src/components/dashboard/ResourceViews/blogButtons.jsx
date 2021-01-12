import { ImMoveUp, ImMoveDown } from 'react-icons/im'
import {  FaTrash } from 'react-icons/fa'

export function BlogButtons({
  delFunc,
  moveContentUp,
  moveContentDown,
  showMoveUp,
  showMoveDown
}) {
  const buttonStyle = {size: '15px', color: '#385749ff'}

  return (
    <div>
      <button
        title='Delete'
        onClick={delFunc}
      >
        <FaTrash {...buttonStyle}/>
      </button>
      <button 
        onClick={moveContentUp}
        disabled={showMoveUp}
        title='Move Up'
      ><ImMoveUp {...buttonStyle}/></button>
      <button
        onClick={moveContentDown}
        disabled={showMoveDown}
        title='Move Down'
      ><ImMoveDown {...buttonStyle}/>
      </button>
    </div>
  )
}