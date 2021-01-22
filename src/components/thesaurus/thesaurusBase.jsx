import { useApi } from './apiHook';
import { LoadedApp } from './loadedApp';
import { Loading } from './loading';


export function ThesaurusBase() {
  const { isLoaded, ApiError } = useApi();

  if (ApiError) {

    return (
      <div className="App">
        <div>Error: {ApiError.message}</div>;
      </div>
    )
  } else if (!isLoaded) {
    return ( 
      <Loading />
    )
  } else {
    return (
      <div className="App">
        <LoadedApp/>
      </div>
    );
  }
}