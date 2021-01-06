import { ResourceList } from './resourceList';

export function GenResourceView({ view, dispatch, data, dataFuncs }) {
  const name = view.split('-')[0].toUpperCase()
  return (
    <main>
      <h1>{ name }</h1>
      <button onClick={() => dispatch({type: 'home'})}>Home</button>
      <hr/>
      <ResourceList data={data} dataFuncs={dataFuncs} view={ view } name={name}/>
    </main>
  )
}