import React, { Component } from 'react';

class Timer extends Component {
    constructor(props){
        super(props);

        this.state = {
            date: new Date()
        }
    }
    componentDidMount = () =>{
        setInterval(
            () => this.tick(),
            1000
        )
    }
    tick = () =>{
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <>
                <h1>{this.state.date.toLocaleTimeString()}</h1>
            </>
        );
    }
}

export default Timer;