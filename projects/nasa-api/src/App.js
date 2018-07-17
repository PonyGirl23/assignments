import React, { Component } from 'react'
import StarList from './StarList'
import './Styles.css'
import { Switch, Route } from 'react-router-dom'
import Nav from './Nav'
import Footie from './Footie'
import Home from './Home'
import inDepth from './InDepth'

function App(props) {
    return (
        <div>
            <Nav />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/Stars' component={StarList} />
                <Route path='/inDepth' component={inDepth} /> 
            </Switch>
            <Footie />
        </div>
    )
}
export default App