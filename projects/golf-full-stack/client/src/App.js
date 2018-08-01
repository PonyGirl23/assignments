import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './Styles.css'
import Home from './Home'
import Nav from './Nav'
import Footie from './Footie'

function App() {
    return (
        <div>
            <Nav />
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
            <Footie />
        </div>
    )
}

export default App