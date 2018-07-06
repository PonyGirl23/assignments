import React, { Component } from "react"

class App extends Component {
    constructor() {
        super();
        this.state = {
            color: "green",
            width: "200px",
            height: "100px"
        }
    }
    componentDidMount() {
        window.addEventListener("keypress", (e) => {
            if (e.key === "a") {
                this.setState({
                    color: "red"
                })
            } else if (e.key === "v") {
                this.setState(prevState => ({
                 width: prevState.width === "200px" ? "700px" : "200px"
                })
                )
            }
        })
    }
    componentWillUnmount() {
        window.removeEventListener("keypress")
    }

    render() {
        return (
            <div style={{
                backgroundColor: this.state.color,
                width: this.state.width,
                height: this.state.height
            }}>
                Hello
                    </div>
        )
    }
}
export default App