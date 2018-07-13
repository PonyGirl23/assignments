import React, { Component } from 'react'
import StarList from './StarList'
import './Styles.css'
// import Form from './Form'

function App(props){
    return(
        <div>
            <nav>
                <h1>Stars: Gems Of The Cosmos</h1>
            </nav>
            {/* <Form /> */}
            <StarList />
        </div>
    )
}





export default App