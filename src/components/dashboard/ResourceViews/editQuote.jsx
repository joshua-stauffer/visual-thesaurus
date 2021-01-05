import { MainButtonBar } from './mainButtonBar';

export function EditQuote({dispatch, dataObject}){

  return (
    <main>
      <MainButtonBar
        backFunc={() => dispatch({type: 'quotes-gen'})}
        homeFunc={() => dispatch({type: 'home'})}
        saveFunc={() => console.log('save this, please!')}
      />
      <h1>Edit Quote</h1>
      <hr/>
      <label>
        <p>Quote: </p>
        <textarea value={dataObject.data.text}/>
      </label>
      <label>
        <p>Author: </p>
        <textarea value={dataObject.data.author}/>
      </label>
      
    </main>
  )
}