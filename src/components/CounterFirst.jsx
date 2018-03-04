import React, { Component } from 'react'

class CounterFirst extends Component {
    state = {
        score: 0
    }
    render() {
        return(
            <div className = "section" onClick={this.handleClick}>
                {this.state.score}
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            score: this.state.score + 1
        })
    }
}

export default CounterFirst