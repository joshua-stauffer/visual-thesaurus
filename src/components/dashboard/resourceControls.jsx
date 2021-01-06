
export function ResourceControls({id, index, funcs, isFirst, isLast, view}) {
  const { moveUp, moveDown, add, edit, del } = funcs
  return (
    <div>
      { (index || index === 0) && 
        <>
          <button
            onClick={() => moveUp(index, view)}
            disabled={moveUp && !isFirst ? false : true}
          >
            Move Up
          </button>

          <button
            onClick={() => moveDown(index, view)}
            disabled={moveDown && !isLast ? false : true}
          >
            Move Down
          </button>
        </>
      }
{/* 
      <button
        onClick={() => add(id)}
        disabled={add ? false : true}
      >
        Add New Below
      </button>
 */}
      <button
        onClick={() => edit(id)}
        disabled={edit ? false : true}
      >
        Edit
      </button>

      <button
        onClick={() => del(id)}
        disabled={del ? false : true}
      >
        Delete
      </button>
    </div>
  )
}