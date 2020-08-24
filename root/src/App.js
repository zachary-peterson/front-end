import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { NavBar } from './components/NavBar';

import './App.css';

function App() {
  return (
    <>
    <NavBar />
      <Switch>
        <Route path='/dashboard' />
        <Route exact path='/' />
      </Switch>
    </>
  );
}

export default App;
