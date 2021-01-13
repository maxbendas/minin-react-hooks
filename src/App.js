import React from 'react';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";

function App() {
    return (
        <Router>
            <Navbar/>
            <div className="container pt-5">
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/profile/:name" exact component={Profile}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
