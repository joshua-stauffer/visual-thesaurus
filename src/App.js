import './App.css';
import React from 'react';
import { useApi } from './components/apiHook';
import { LoadedApp } from './components/loadedApp';
import { Header } from './components/header';
import { NavBar } from './components/navBar';


function App() {
  const { isLoaded, ApiError } = useApi();

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

export default App;