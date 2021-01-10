import './App.css';
import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

// Thesaurus was replaced by ThesaurusBase in merge 1/9/2020
//import { Thesaurus } from './components/thesaurus/thesaurus'
import { Dashboard } from './components/dashboard/dashboard'
import { ThesaurusBase } from './components/thesaurus/thesaurusBase'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/visual-thesaurus">
          <ThesaurusBase /> 
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  )
}



export default App;
