import React, { useEffect } from 'react';
import { useReducer} from 'react';

import { FaSpinner } from 'react-icons/fa'

import { Overview } from './overview';
import { resourceReducerState, resourceReducer } from './hooks/resourceReducer';
import { GenResourceView } from './genResourceView';
import { SpecificResourceView } from './specificResourceView';

import { useAPI } from './hooks/useAPI';
import { useData } from './hooks/useData';
import { useDataStore } from './hooks/useDataStore';



export function Dashboard() {
  const [state, dispatch] = useReducer(resourceReducer, resourceReducerState);
  const [callAPI, isLoading] = useAPI();
  const getData = useDataStore();

  const dataObject = getData(state.view)
  const { hasLoaded } = dataObject;
  const [dataFuncs] = useData(dataObject, dispatch);
  

  useEffect(() => {
    if ((hasLoaded || isLoading) || state.view === 'home') return
    
    callAPI(state.apiAddress, state.apiArgs, dataObject)
  }, [hasLoaded, isLoading, state, dataObject])


  if (state.view === 'home') {
    return <Overview dispatch={dispatch}/>
  }

  if (!hasLoaded) {
    return <FaSpinner size={'50px'}/>
  }

  if (state.view.split('-')[1] === 'gen') {
    return(
      <GenResourceView
        view={ state.view }
        dispatch={dispatch}
        data={dataObject.data}
        dataFuncs={dataFuncs}
      />
    )

  } else if (state.view.split('-')[1] === 'sp') {
    return(
      <SpecificResourceView
        rawView={ state.view }
        dispatch={dispatch}
        dataObject={dataObject}
        dataFuncs={dataFuncs}
      />
    )

  } else {
    throw new Error('Unexpected view in dashboard')
  }
}