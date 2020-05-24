import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
  } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './containers/Landing'
import Create from './containers/Create'
import Status from './containers/Status'
import WorldView from './containers/WorldView'

import './App.css'



export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Landing/>
                </Route>
                <Route path="/create">
                    <Create/>
                </Route>
                <Route path="/status">
                    <Status/>
                </Route>
                <Route path="/worldview">
                    <WorldView/>
                </Route>
            </Switch>
        </Router>
    )
}