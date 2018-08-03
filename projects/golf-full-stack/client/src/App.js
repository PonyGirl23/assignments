import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './Styles.css'
import Home from './Home'
import CourseInput from './CourseInput'
import RoundInput from './RoundInput'
import Stats from './Stats'
import Nav from './Nav'
import Footie from './Footie'

function App() {
    return (
        <div>
            <Nav />
            <Switch>
                <Route exact path='/' component={ Home } />
                <Route  path='/CourseInput' component={ CourseInput }/>
                <Route path='/RoundInput' component={ RoundInput } />
                <Route  path='/Stats' component={ Stats }/>
            </Switch>
            <Footie />
        </div>
    )
}

export default App