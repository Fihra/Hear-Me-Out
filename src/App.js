import React from 'react';
import Navbar from './components/Navbar';
import Signup from './forms/Signup';
import './App.css';

import About from './components/About';
import Directory from './components/Directory';
import Profile from './components/Profile';

import { BrowserRouter as Router, Route } from 'react-router-dom';

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

class App extends React.Component {

  render(){

    return (
      <div className="App">
        <Router>
          <Navbar/>
          <h1>Hear Me Out</h1>
          <Route exact path="/" render={(routerProps) => <Signup {...routerProps} newUser={this.props.newUser}/>}/>
          <Route exact path="/about" render={(routerProps) => <About {...routerProps}/>}/>
          <Route exact path="/directory" render={(routerProps) => <Directory {...routerProps} musicians={this.props.users}/>}/>
          <Route exact path="/profile" render={(routerProps) => <Profile {...routerProps}/>}/>
        
        </Router>
       
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
