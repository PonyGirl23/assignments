import React, { Component } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Home from "./Home"
import About from "./About"
import Services from "./Services"
import "./Styles.css"
import { Switch, Route } from "react-router-dom"



class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component= { Home } />
                    <Route path="/about" component= { About } />
                    <Route path="/services" component= { Services } />
                </Switch>
                <Footer />
            </div>
        )
    }
}


export default App