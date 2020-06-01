import React, { Component } from 'react';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: "Georges"
        }
    }

    render() {
        return (
            <div>
                <h4 className="bg-primary text-white text-center p-2">
                    { this.state.username }'s Todo List
                </h4>
            </div>
        );
    }
    
}

export default App;