import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import './App.css';
import MainComponent from './conatiner/MainComponent';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MainComponent />
      </div>
    );
  }
}

export default App;
