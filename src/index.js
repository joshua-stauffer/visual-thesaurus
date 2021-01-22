import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApiProvider } from './components/thesaurus/apiHook';

ReactDOM.render(
  <React.StrictMode>
    <ApiProvider>
      <App />
    </ApiProvider>
  </React.StrictMode>,
  document.getElementById('react-root')
);

