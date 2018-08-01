import React from 'react'

function Home() {
    return (
        <div className="Home">
            <div className="Features">
            {/* <h2>Round Tracker is a quick and easy to use App to save and compare data on every course, every time.</h2> */}
            <h3>Features:</h3>
            <ol>
                <li>Make a profile</li>
                <li>Select your course and input scorecard information:</li>
                <ul>
                    <li>Date PLayed</li>
                    <li>Hole Number</li>
                    <li>Par</li>
                    <li>Yardage</li>
                </ul>
                <li>Select holes played and store information:</li>
                <ul>
                    <li>Hole Number</li>
                    <li>Tee Choice</li>
                    <li>Par</li>
                    <li>Strokes</li>
                </ul>
                <li>Notes Section allows you to keep track of any informtion you feel is valuable:</li>
                <ul>
                    <li>What clubs you used</li>
                    <li>Details about your swing</li>
                    <li>Weather conditions on the course that day</li>
                    <li>Time of play</li>
                    <li>Anything you'd change about playing that hole the next time</li>
                    <li>Yards hit off the tee</li>
                </ul>
            </ol>
            </div>
        </div>
    )
}


export default Home