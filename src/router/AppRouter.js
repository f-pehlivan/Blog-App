import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Login from '../pages/Login';
import Register from '../pages/Register';

const AppRouter = () => {
  return (
    <Router>
        <Navbar/>
        <Switch>
            <Router path="/login" component={Login}/>
            <Router path="/register" component={Register}/>
        </Switch>
    </Router>
  )
}

export default AppRouter;