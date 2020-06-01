import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "Georges"
        }
    }

    changeStateData = () => {
        console.log('=> changeStateData');
        this.setState({
            username: this.state.username === "Georges" ? "Marion" : "Georges"
        })
    }

    render = () =>
        <div>
            <h4 className="bg-primary text-white text-center p-2">
                {this.state.username}'s Todo List
            </h4>
            <button onClick={this.changeStateData}>
                Change username
            </button>
        </div>

}

export default App;