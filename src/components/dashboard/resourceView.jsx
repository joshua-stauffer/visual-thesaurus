import { ResourceList } from './resourceList';

export function ResourceView({ state, dispatch, data, dataFuncs }) {
  return (
    <main>
      <h1>{ state.resource }</h1>
      <button onClick={() => dispatch({type: 'home'})}>Home</button>
      <hr/>
      <ResourceList data={data} dataFuncs={dataFuncs} />
    </main>
  )
}