import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { NavBar } from './components/NavBar';
import Login from './components/Login';
import Register from './components/Register';

import './App.css';

function App() {
  return (
    <>
    <NavBar />
      <Switch>
        <Route path='/dashboard' />
        <Route path='/login' component={Login} />
        <Route exact path='/' component={Register}/>
      </Switch>
    </>
  );
}

export default App;
