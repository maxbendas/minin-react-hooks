import React from 'react';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Alert from "./components/Alert";
import {AlertState} from "./context/alert/AlertState";
import {GithubState} from "./context/github/GithubState";

function App() {
    return (
        <GithubState>
            <AlertState>
                <Router>
                    <Navbar/>
                    <div className="container pt-5">
                        <Alert alert={{text: 'Test alert'}}/>
                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/about" component={About}/>
                            <Route path="/profile/:name" exact component={Profile}/>
                        </Switch>
                    </div>
                </Router>
            </AlertState>
        </GithubState>
    );
}

export default App;
