import React, {Fragment, Component} from 'react';
import Navbar from './components/Navbar';
import Signup from './forms/Signup';
import Login from './forms/Login';
import './App.css';

import About from './components/About';
import Directory from './components/Directory';
import Profile from './components/Profile';
import {auth} from './components/auth';

import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import { connect } from 'react-redux';
import { newUser, loginUser, updateUser } from './actions';

const mapStateToProps = (state) => {
  return{
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      newUser: (name, password) => dispatch(newUser(name, password)),
      loginUser: (user) => dispatch(loginUser(user)),
      updateUser: (user) => dispatch(updateUser(user)),
  }
}

const PrivateRoute = ({ render: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    auth.isAuthenticated === true 
      ? //<Profile {...props}/>
      <Component {...props}/>
      : <Redirect to='/login'/> 
  )}/>
)

class App extends Component{
  render(){
    return (
      <div className="App">
        <Router>
          <Navbar/>
          <h1>Hear Me Out <span role="img" aria-label="speaker">🔊</span></h1>
          <Route exact path="/" render={(routerProps) => <About {...routerProps}/>}/>
          <Route exact path="/directory" render={(routerProps) => <Directory {...routerProps} musicians={this.props.users}/>}/>
          <PrivateRoute exact path="/profile" render={(routerProps) => <Profile {...routerProps} musicians={this.props.users} updateUser={this.props.updateUser}/>}/>
          <Route exact path="/login" render={(routerProps) => 
          <Fragment>
            <Login {...routerProps} musicians={this.props.users} loginUser={this.props.loginUser}/>
            <Signup {...routerProps} newUser={this.props.newUser}/>
          </Fragment>}/>
          
        </Router>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
