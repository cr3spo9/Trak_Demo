import './App.css';
import './styles/Split.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React, { Component } from "react";

import Start from './components/Start.js'
import Train from './components/Train.js'

class App extends Component {

  render(){
  return <div className="container">
    <Router>
      <Switch>
        <Route path="/" exact>
          <Start/>
        </Route>
        <Route path="/train" exact>
          <Train/>
        </Route>

      </Switch>

    </Router>
    </div>

  }
}

export default App;
