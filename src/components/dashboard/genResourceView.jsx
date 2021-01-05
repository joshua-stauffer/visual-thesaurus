import { ResourceList } from './resourceList';

export function GenResourceView({ view, dispatch, data, dataFuncs }) {
  return (
    <main>
      <h1>{ view.split('-')[0] }</h1>
      <button onClick={() => dispatch({type: 'home'})}>Home</button>
      <hr/>
      <ResourceList data={data} dataFuncs={dataFuncs} view={ view }/>
    </main>
  )
}