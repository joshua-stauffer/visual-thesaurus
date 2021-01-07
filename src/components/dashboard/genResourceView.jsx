import { ResourceList } from './resourceList';

export function GenResourceView({ view, dispatch, dataObject, dataFuncs }) {
  const name = view.split('-')[0].toUpperCase()
  return (
    <main>
      <h1>{ name }</h1>
      <button onClick={() => dispatch({type: 'home'})}>Home</button>
      <hr/>
      <ResourceList dataObject={dataObject} dataFuncs={dataFuncs} view={ view } name={name}/>
    </main>
  )
}