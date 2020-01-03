import React from 'react';
import Navbar from './components/Navbar';
import Signup from './forms/Signup';
import './App.css';

import About from './components/About';
import Directory from './components/Directory';
import Profile from './components/Profile';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  console.log(state);
  return{
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

class App extends React.Component {

  componentDidMount(){
    console.log("HEre I am");
  }
  render(){

    const { users } = this.props;
    console.log(users);

    return (
      <div className="App">
        <Router>
          <Navbar/>
          <h1>Hear Me Out</h1>
          <Route exact path="/" render={(routerProps) => <Signup {...routerProps}/>}/>
          <Route exact path="/about" render={(routerProps) => <About {...routerProps}/>}/>
          <Route exact path="/directory" render={(routerProps) => <Directory {...routerProps}/>}/>
          <Route exact path="/profile" render={(routerProps) => <Profile {...routerProps}/>}/>
        
        </Router>
       
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
