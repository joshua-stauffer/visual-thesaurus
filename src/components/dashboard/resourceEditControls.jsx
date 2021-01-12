import {  FaEdit } from 'react-icons/fa'


export function ResourceEditControls({id, funcs, buttonStyle }) {
  const { edit } = funcs

  return (
    <div className='gen-list-edit-controls'>


      <button
        onClick={() => edit(id)}
        disabled={edit ? false : true}
        title={'Edit'}
      >
        <FaEdit {...buttonStyle}/>
      </button>


    </div>
  )
}