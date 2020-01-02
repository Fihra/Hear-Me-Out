import React from 'react';
import Navbar from './components/Navbar';
import Signup from './forms/Signup';
import './App.css';

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
        <Navbar/>
        <h1>Hear Me Out</h1>
        <Signup/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
