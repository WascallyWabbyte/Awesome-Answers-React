import React, { Component } from 'react';

class Clock extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentTime: new Date()
    }
  }

  componentDidMount(){
    this.intervalId = setInterval(() => {
      this.setState({
        currentTime: new Date()
      })
    }, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  render(){
    return(
      <span className="Clock">
        { this.state.currentTime.toLocaleString() }
      </span>
    )
  }
}

export default Clock;
