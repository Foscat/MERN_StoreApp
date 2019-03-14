import React, { Component } from 'react';
import {  BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Home from "./components/pages/store/Home";
import MaagerHome from "./components/pages/office/ManagerHome";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/manager" component={MaagerHome} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;