import React, { Component } from 'react';
// import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import Dashboard from './components/dashboard/Dashboard';
import UserDetails from "./components/projects/UserDetails";
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>
          <Switch>
            {/* In ideal case the userdetails should be protective route but due to time constraints skipping that */}
            <Route exact path='/' component={Dashboard}></Route>
            <Route path='/userdetails' component={UserDetails}></Route>
            <Route path='/signin' component={SignIn}></Route>
            <Route path='/signup' component={SignUp}></Route>
          </Switch>
        </div>
      </BrowserRouter> 
    );
  }
}

export default App;
