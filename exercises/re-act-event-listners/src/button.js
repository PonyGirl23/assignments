// import React from "react";

// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = { counter: 0 }
//         this.up = this.up.bind(this);
//         this.down = this.down.bind(this);
//         this.upTen = this.upTen.bind(this);
//         this.downTen = this.downTen.bind(this);
//     }
//     up() {
//         this.setState((prevState) => ({ counter: prevState.counter + 1 }));
//     }
//     down() {
//         this.setState((prevState) => ({ counter: prevState.counter - 1 }));
//     }
//     upTen() {
//         this.setState((prevState) => ({ counter: prevState.counter + 10 }));
//     }
//     downTen() {
//         this.setState((prevState) => ({ counter: prevState.counter - 10 }));
//     }
//     render() {
//         return (
//             <div>
//                 <h2>{this.state.counter}</h2>
//                 <button onClick={this.up}>Up</button>
//                 <button onClick={this.down}>Down</button>
//                 <button onClick={this.upTen}>Up By Ten</button>
//                 <button onClick={this.downTen}>Down By Ten</button>
//             </div>
//         )
//     }
// }

class App extends React.Component {
constructor() {
    super();
    this.state = { counter: 0 }
    this.up = this.up.bind(this);
    this.down = this.down.bind(this);
}
up() { 
    this.setState((prevState) => ({ counter: prevState.counter + 10 }));
}
down() {
    this.setState((prevState) => ({ counter: prevState.counter - 10 }));
}
render() {
    return (
        <div>
            <h2>{this.state.counter}</h2>
            <button onClick={this.up}>Up</button>
            <button onClick={this.Down}>Down</button>
        </div>
    )
}
}

export default App;