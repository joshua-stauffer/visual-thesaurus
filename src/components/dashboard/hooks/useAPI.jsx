import { useCallback, useEffect, useState } from 'react';


export function useAPI(){

  // const [hasLoaded, setHasLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadData, setLoadData] = useState(false);
  const [APIAddress, setAPIAddress] = useState(null);
  const [dataObject, setDataObject] = useState(null);
  const [APIArgs, setAPIArgs] = useState(null);

  const resetAPICall = useCallback(() => {
    setAPIAddress(null);
    setAPIArgs(null);
    setLoadData(false);
    dataObject.dataHasLoaded();
    setIsLoading(false);
    setDataObject(null);
  }, [dataObject])


  useEffect(() => {
    if (!loadData) return;
    console.log('calling api with the following args: ', APIArgs, APIAddress, dataObject)
    setIsLoading(true)
    setLoadData(false)
    //setHasLoaded(false)
    // make api call
    fetch(APIAddress, APIArgs)
      .then(r => r.json())
      .then(data => {
        console.log('got data ', data)
        setIsLoading(false);
        //setHasLoaded(true)
        dataObject.updateData(data, dataObject.id);
        dataObject.dataHasLoaded(dataObject.id);
        console.log('just updated data for ', dataObject.id)
        resetAPICall();
      })
      .catch((error => console.log('error in fetch: ', error)))

  }, [loadData, APIArgs, APIAddress, dataObject, resetAPICall])


  const callAPI = (APIAddress, APIArgs, dataObject) => {
    console.log('entered callAPI')
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