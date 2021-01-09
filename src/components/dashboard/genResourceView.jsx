import { ResourceList } from './resourceList';

export function GenResourceView({ view, dispatch, dataObject, dataFuncs }) {
  const name = view.split('-')[0].toUpperCase()
  const { data } = dataObject;
  const { saveBatch } = dataFuncs;
  const showSaveButton = data[0].order || data[0].order === 0 ? true : false;
  const canSave = data.filter(d => d.isEdited).length ? false : true;

  return (
    <main>
      <h1>{ name }</h1>
      <button onClick={() => dispatch({type: 'home'})}>Home</button>
      {showSaveButton &&
        <button
          onClick={saveBatch}
          disabled={canSave}
        >Save Order</button>}

      <hr/>
      <ResourceList dataObject={dataObject} dataFuncs={dataFuncs} view={ view } name={name}/>
    </main>
  )
}