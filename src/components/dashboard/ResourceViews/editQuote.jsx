import { MainButtonBar } from './mainButtonBar';

export function EditQuote({dispatch, dataObject, dataFuncs}){
  const { id, data, editData, togglePublished, isEdited } = dataObject;
  const { save } = dataFuncs;

  return (
    <main main className='main-dashboard'>
      <div className='sp-body'>
        <div className='top-bar'>
          <h1 className='gen-header'>Edit Quotes</h1>
          <MainButtonBar
            backFunc={() => dispatch({type: 'quotes-gen'})}
            homeFunc={() => dispatch({type: 'home'})}
            saveFunc={() => save()}
            isEdited={isEdited}
          />
        </div>
      <hr/>

      <div className='sp-item'>
        <label >
          <p>Quote: </p>
          <textarea
            className='med-text'
            value={data.text || ''}
            onChange={e => editData(e.target.value, 'text', id)}
          />
        </label>
      </div>

      <div className='sp-item'>
        <label>
          <p>Author: </p>
          <textarea
            className='short-text'
            value={data.author || ''}
            onChange={e => editData(e.target.value, 'author', id)}
          />
        </label>
      </div>

      <div className='sp-item'>
        <label>
          <p>Published: </p>
            <input
              type="checkbox"
              name="published"
              checked={data.published}
              // amazingly, this won't accept a third parameter!!
              onChange={(e) => togglePublished(e, id)}/>
        </label>
      </div>

      </div>
    </main>
  )
}