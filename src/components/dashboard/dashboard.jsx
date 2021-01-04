import React, { useEffect } from 'react';
import { useReducer} from 'react';

import { Overview } from './overview';
import { resourceReducerState, resourceReducer } from './hooks/resourceReducer';
import { ResourceView } from './resourceView';

import { useData } from './hooks/useData';


const fakeData = [
  {id: 1, index: 0, title: 'Resource 1', edited: false},
  {id: 2, index: 1, title: 'Resource 2', edited: false},
  {id: 3, index: 2, title: 'Resource 3', edited: false},
  {id: 4, index: 3, title: 'Resource 4', edited: false},
  {id: 5, index: 4, title: 'Resource 5', edited: false},
  {id: 6, index: 5, title: 'Resource 6', edited: false},
  {id: 7, index: 6, title: 'Resource 7', edited: false},
]


export function Dashboard() {
  const [state, dispatch] = useReducer(resourceReducer, resourceReducerState);
  const [data, setData, dataFuncs] = useData();

  useEffect(() => {
    setData(fakeData)
  }, [])
  


  if (state.resource === 'home') {
    return <Overview dispatch={dispatch}/>
  }

  return(
    <ResourceView
      state={state}
      dispatch={dispatch}
      data={data}
      dataFuncs={dataFuncs}
    />
  )
}