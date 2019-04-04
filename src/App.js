import React, { Component } from 'react';
// import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import Dashboard from './components/dashboard/Dashboard';
import UserDetails from "./components/projects/UserDetails";
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

class App extends Component {
  state = {
    token: localStorage.getItem('token'),
    user: localStorage.getItem('user')
  }

  handleLogin = (token=null, user=null) => {
    localStorage.setItem('token', token)
    localStorage.setItem('user', user)
    this.setState({
      token,
      user
    })
  }

  handleLogout = () => {
    localStorage.removeItem('token')
    this.setState({
      token: null
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar token={this.state.token} onLogout={this.handleLogout}></Navbar>
          <Switch>
            {/* In ideal case the userdetails should be protective route but due to time constraints skipping that */}
            <Route exact path='/' component={Dashboard}></Route>
            <Route path='/userdetails' component={UserDetails}></Route>
            <Route path='/signin' render={(routeProps) => (<SignIn {...routeProps} onLogin={this.handleLogin} />)} />
            <Route path='/signup' render={(routeProps) => <SignUp {...routeProps} onLogin={this.handleLogin} />} />
          </Switch>
        </div>
      </BrowserRouter> 
    );
  }
}

export default App;