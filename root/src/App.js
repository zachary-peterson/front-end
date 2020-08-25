import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { NavBar } from './components/NavBar';
import Login from './components/Login';
import RegisterStudent from './components/RegisterStudent'

import './App.css';

function App() {
  return (
    <>
    <NavBar />
      <Switch>
        <Route path='/dashboard' />
        <Route path='/login' component={Login} />
        <Route exact path='/' component={RegisterStudent}/>
      </Switch>
    </>
  );
}

export default App;
