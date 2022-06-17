import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Register, Login } from '../pages/LoginRegister';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import NewBlog from '../pages/NewBlog'
import UpdateBlog from '../pages/UpdateBlog';
import Detail from '../pages/Detail';
import {PrivateRouter} from './PrivateRouter';

const AppRouter = () => {
  return (
    <Router>
        <Navbar/>
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/" exact  component={Dashboard}/>

            <PrivateRouter path="/profile" component={Profile}/>
            <PrivateRouter path="/update-blog" component={UpdateBlog}/>
            <PrivateRouter path="/detail" component={Detail}/>
            <PrivateRouter path="/new-blog" component={NewBlog}/>
        </Switch>
    </Router>
  )
}

export default AppRouter;