import { useApi } from './apiHook';
import { LoadedApp } from './loadedApp';
import { Header } from './header';
import { NavBar } from './navBar';


export function ThesaurusBase() {
  const { isLoaded, ApiError } = useApi();
  console.log('in thesaurus base - is loaded and api error are ', isLoaded, ApiError)

  if (ApiError) {

    return (
      <div className="App">
        <Header />
        <NavBar />
        <div>Error: {ApiError.message}</div>;
      </div>
    )
  } else if (!isLoaded) {
    return ( 
      <div className="App">
        <Header />
        <NavBar />
        <div>Loading...</div>)
      </div>
    )
  } else {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <LoadedApp/>
      </div>
    );
  }
}