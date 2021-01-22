import { createContext, useState, useContext, useEffect } from 'react';

const ApiContext = createContext();
export const useApi = () => useContext(ApiContext)

export function ApiProvider({ children }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [apiError, setApiError] = useState(null)
  const [data, setData] = useState(null)


  // load data
  const headers = {
    method: 'GET',
    mode: 'same-origin',
    cache: 'default',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  useEffect(() => {
    fetch('/api/vt-data', headers)
    .then(response => response.json())
    .then(
      (data) => {
        setData(data);
        setTimeout(setIsLoaded, 1, true)
      },
      (error) => {
        setIsLoaded(true);
        setApiError(error);
      }
    )
  }, [])
  


  return (
    // eslint-disable-next-line react/jsx-pascal-case
    <ApiContext.Provider value={{ isLoaded, data, apiError }}>
      { children }
    </ApiContext.Provider>
  )
}