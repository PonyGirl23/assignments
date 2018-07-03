import React, { Component } from "react";
import HeroList from "./HeroList";

class App extends Component {
    constructor() {
        super()

        this.superHeroes = [
            {
                name: "Okoye",
                imageUrl: "https://img.buzzfeed.com/buzzfeed-static/static/2017-12/6/15/asset/buzzfeed-prod-fastlane-02/sub-buzz-24026-1512592466-1.jpg?crop=597%3A398%3B23%2C3&downsize=715:*&output-format=auto&output-quality=auto"
            },
            {
                name: "Valkyrie",
                imageUrl: "https://img.buzzfeed.com/buzzfeed-static/static/2017-12/6/14/asset/buzzfeed-prod-fastlane-03/sub-buzz-28715-1512589913-6.jpg?crop=426%3A640%3B9%2C0&downsize=715:*&output-format=auto&output-quality=auto"
            },
            {
                name: "Catwoman",
                imageUrl: "https://img.buzzfeed.com/buzzfeed-static/static/2017-12/6/15/asset/buzzfeed-prod-fastlane-02/sub-buzz-23328-1512591576-10.jpg?crop=750%3A1125%3B0%2C27&downsize=715:*&output-format=auto&output-quality=auto"
            }, {
                name: "Gamora",
                imageUrl: "https://img.buzzfeed.com/buzzfeed-static/static/2017-12/6/14/asset/buzzfeed-prod-fastlane-02/sub-buzz-21703-1512588817-1.jpg?crop=380%3A380%3B170%2C0&downsize=715:*&output-format=auto&output-quality=auto"
            }, {
                name: "Storm",
                imageUrl: "https://img.buzzfeed.com/buzzfeed-static/static/2017-12/6/13/asset/buzzfeed-prod-fastlane-01/sub-buzz-20470-1512585897-3.jpg?crop=496%3A331%3B35%2C0&downsize=715:*&output-format=auto&output-quality=auto"
            },
            {
                name: "Batgirl",
                imageUrl: "https://img.buzzfeed.com/buzzfeed-static/static/2017-12/6/12/asset/buzzfeed-prod-fastlane-02/sub-buzz-16911-1512581616-1.jpg?crop=1137%3A758%3B255%2C0&downsize=715:*&output-format=auto&output-quality=auto"
            },
        ]
        this.styles = {
            color: 'blue'
        }
    }
    function () {
        this.state = {}
    }
    render() {

        return (
            <div style={this.styles}>
                <HeroList superHeroes={this.superHeroes} />
            </div>
        );
    }
}


export default App;

