import React, { Component } from 'react';
import {  BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Home from "./components/pages/store/Home";
import MangerHome from "./components/pages/office/ManagerHome";
import NoMatch from './components/pages/NoMatch';
import "./general.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/manager" component={MangerHome} />
                            <Route component={NoMatch} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;