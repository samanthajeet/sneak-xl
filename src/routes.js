import React from 'react';
import { Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Add_Shoe from './components/Add_Shoe'


export default (
  <Switch>
    <Route path="/" exact component={Login}/>
    <Route path="/user/dashboard" component={Dashboard} />
    <Route path="/user/addshoe" component={Add_Shoe} />
  </Switch>
)