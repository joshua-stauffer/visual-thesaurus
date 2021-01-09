
export function ResourceControls({id, order, funcs, isFirst, isLast, view }) {
  const { add, edit, del, moveUp, moveDown } = funcs
  console.log('---------resource controls, order is ', order)
  return (
    <div>
      { (order || order === 0) && 
        <>
          <button
            onClick={() => moveUp(order, view)}
            disabled={moveUp && !isFirst ? false : true}
          >
            Move Up
          </button>

          <button
            onClick={() => moveDown(order, view)}
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