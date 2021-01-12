import { useCallback, useEffect, useState } from 'react';


export function useAPI(dispatch){

  // const [hasLoaded, setHasLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadData, setLoadData] = useState(false);
  const [APIAddress, setAPIAddress] = useState(null);
  const [dataObject, setDataObject] = useState(null);
  const [APIArgs, setAPIArgs] = useState(null);

  const resetAPICall = useCallback(() => {
    console.log('resetting api call')
    setAPIAddress(null);
    setAPIArgs(null);
    setLoadData(false);
    dataObject.dataHasLoaded();
    setIsLoading(false);
    setDataObject(null);
  }, [dataObject])

  const errorReset = () => {
    console.log('error reset in api call')
    setAPIAddress(null);
    setAPIArgs(null);
    setLoadData(false);
    setIsLoading(false);
    setDataObject(null);
  }


  useEffect(() => {
    if (!loadData) return;
    // console.log('calling api with the following args: ', APIArgs, APIAddress, dataObject)
    setIsLoading(true)
    setLoadData(false)
    //setHasLoaded(false)
    // make api call
    fetch(APIAddress, APIArgs)
      .then(r => {
        console.log('r is ', r)
        console.log('status is ', r.status)
        if (!r.ok) {
          
          dispatch({
            type: 'error',
            payload: {
              errorCode: r.status
            }
          })
          errorReset()
        } else {
          return r.json()
        }
      })
      .then(data => {
        if (data) {
          console.log('got data ',  data)
          setIsLoading(false);
          //setHasLoaded(true)
          dataObject.updateData(data, dataObject.id);
          dataObject.dataHasLoaded(dataObject.id);
          //console.log('just updated data for ', dataObject.id)
          resetAPICall();
        }
      })
      // TODO: if error, reset hasLoaded to true
      .catch((error => {
        console.log(error)
        //dataObject.dataHasLoaded()
      }))

  }, [loadData, APIArgs, APIAddress, dataObject, resetAPICall])


  const callAPI = (APIAddress, APIArgs, dataObject) => {
    //console.log('entered callAPI')
    setAPIAddress(APIAddress);
    setAPIArgs(APIArgs);
    setDataObject(dataObject);
    setLoadData(true);
    //setHasLoaded(false);
    setIsLoading(true);
  }
  




  return [callAPI, isLoading];
}

/* 
      .then(data => {
        console.log('got data ', data)
        setIsLoading(false)
        setHasLoaded(true)
        dataObject.updateData(data)
        resetAPICall()
      })

*/


/*
this was right before the return:


  const resetAPICall = () => {
    setAPIAddress(null);
    setAPIArgs(null);
    setLoadData(false);
    dataObject.dataHasLoaded();
    setIsLoading(false);
    setDataObject(null);
  }





*/