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
import { newUser } from './actions';

const mapStateToProps = (state) => {
  return{
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      newUser: (name, password) => dispatch(newUser(name, password))
  }
}

// const auth2 = {
//   isAuthenticated: false,
//   authenticate(cb){
//       this.isAuthenticated = true
//   },
//   signout(cb){
//       this.isAuthenticated = false
//   }
// }

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    auth.isAuthenticated === true 
      ? <Component {...props}/>
      : <Redirect to='/profile'/> 
  )}/>
)

class App extends Component{

  render(){

    return (
      <div className="App">
        <Router>
          <Navbar/>
          <h1>Hear Me Out</h1>
          {/* <Route exact path="/signup" render={(routerProps) => <Signup {...routerProps} newUser={this.props.newUser}/>}/> */}
          <Route exact path="/about" render={(routerProps) => <About {...routerProps}/>}/>
          <Route exact path="/directory" render={(routerProps) => <Directory {...routerProps} musicians={this.props.users}/>}/>
          <PrivateRoute exact path="/profile" render={(routerProps) => <Profile {...routerProps}/>}/>
          <Route exact path="/login" render={(routerProps) => 
          <Fragment>
            <Login {...routerProps} musicians={this.props.users}/>
            <Signup {...routerProps} newUser={this.props.newUser}/>
          </Fragment>}/>
          

        </Router>
       
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
