import React from 'react';
import Navbar from './components/Navbar';
import Signup from './forms/Signup';
import './App.css';

import { connect } from 'react-redux';


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Navbar/>
        <h1>Hear Me Out</h1>
        <Signup/>
      </div>
    );
  }
}

export default App;
