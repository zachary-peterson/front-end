import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { NavBar } from './components/NavBar';
import PrivateRoute from './components/PrivateRoute';
import { Dashboard } from './components/Dashboard';
import { LandingPage } from './components/LandingPage';
import NewTask from './components/NewTask';
import EditTask from './components/EditTask';

import './App.css';

function App() {
  return (
    <div className='App'>
    <NavBar />
      <Switch>
        <PrivateRoute path='/dashboard/edit-task/:id' component={EditTask} />
        <PrivateRoute path='/dashboard/add-task' component={NewTask} />
        <PrivateRoute path='/dashboard' component={Dashboard} />
        <Route path='/' component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;
