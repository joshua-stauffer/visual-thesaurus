import { MainButtonBar } from './mainButtonBar';

export function EditQuote({dispatch, dataObject, dataFuncs}){
  const { id, data, editData, togglePublished, isEdited } = dataObject;
  const { save } = dataFuncs;

  return (
    <main>
      <MainButtonBar
        backFunc={() => dispatch({type: 'quotes-gen'})}
        homeFunc={() => dispatch({type: 'home'})}
        saveFunc={() => save()}
        isEdited={isEdited}
      />
      <h1>Edit Quotes</h1>
      <hr/>
      <label>
        <p>Quote: </p>
        <textarea
          value={data.text || ''}
          onChange={e => editData(e.target.value, 'text', id)}
        />
      </label>
      <label>
        <p>Author: </p>
        <textarea
          value={data.author || ''}
          onChange={e => editData(e.target.value, 'author', id)}
        />
      </label>
      <label>
        Published: 
          <input
            type="checkbox"
            name="published"
            checked={data.published}
            // amazingly, this won't accept a third parameter!!
            onChange={(e) => togglePublished(e, id)}/>
      </label>
      
    </main>
  )
}