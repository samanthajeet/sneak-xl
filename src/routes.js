import React from 'react';
import { Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'


export default (
  <Switch>
    <Route path="/" exact component={Login}/>
    <Route path="/user/dashboard" component={Dashboard} />
  </Switch>
)