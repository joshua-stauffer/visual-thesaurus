import { useEffect, useState } from 'react';

import {} from './../fakeData/fakeList.json'

export function useAPI(){

  // const [hasLoaded, setHasLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadData, setLoadData] = useState(false);
  const [APIAddress, setAPIAddress] = useState(null);
  const [dataObject, setDataObject] = useState(null);
  const [APIArgs, setAPIArgs] = useState(null);

  useEffect(() => {
    if (!loadData) return;


    setIsLoading(true)
    setLoadData(false)
    //setHasLoaded(false)
    // make api call
    fetch(APIAddress)
      .then(r => r.json())
      .then(data => {
        console.log('got data ', data)
        setIsLoading(false);
        //setHasLoaded(true)
        dataObject.updateData(data, dataObject.id);
        dataObject.dataHasLoaded(dataObject.id);
        resetAPICall();
      })
      .catch((error => console.log('error in fetch: ', error)))

  }, [loadData, APIArgs, APIAddress])


  const callAPI = (APIAddress, APIArgs, dataObject) => {
    setAPIAddress(APIAddress);
    setAPIArgs(APIArgs);
    setDataObject(dataObject);
    setLoadData(true);
    //setHasLoaded(false);
    setIsLoading(true);
  }

  const resetAPICall = () => {
    setAPIAddress(null);
    setAPIArgs(null);
    setLoadData(false);
    dataObject.dataHasLoaded();
    setIsLoading(false);
    setDataObject(null);
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