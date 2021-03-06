import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  
} from 'react-router-dom';
import HomePage from './components/index';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route exact path="/" component={HomePage} />
        </div>
      </Router>
    );
  }
}

export default App;
