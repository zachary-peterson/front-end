import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { NavBar } from './components/NavBar';
import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login';
import RegisterStudent from './components/RegisterStudent'
import { AdminView } from './components/AdminView';

import './App.css';

function App() {
  return (
    <>
    <NavBar />
      <Switch>
        <PrivateRoute path='/dashboard' component={AdminView} />
        <Route path='/login' component={Login} />
        <Route exact path='/' component={RegisterStudent}/>
      </Switch>
    </>
  );
}

export default App;
