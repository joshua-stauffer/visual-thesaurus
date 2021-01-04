import './App.css';
import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import { Thesaurus } from './components/thesaurus/thesaurus'
import { Dashboard } from './components/dashboard/dashboard'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/visual-thesaurus">
          <Thesaurus />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  )
}

export default App