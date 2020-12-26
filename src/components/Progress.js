import React, { Component } from 'react'
import { Line } from 'rc-progress'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

import AlertScore from './Alert.js'

import '../styles/Progress.css'

export default class Progress extends Component {
  constructor() {
    super();
    this.state = {
      percent: 34,
      color: '#d12000',
    };
    this.changeState = this.changeState.bind(this);
  }

  colorValue(value){
    if (value < 40 ){
      this.setState({
        color: "#d12000",
      })
    }
    else if (value < 50 ){
      this.setState({
        color: "#ed8d00",
      })
    }
    else if (value < 60 ){
      this.setState({
        color: "#f1bc00",
      })
    }
    else if (value < 70 ){
      this.setState({
        color: "#84c42b",
      })
    }
    else if (value < 80 ){
      this.setState({
        color: "#53b83a",
      })
    }
    else if (value < 101 ){
      this.setState({
        color: "#3da940",
      })
      
    }
  }

  changeState() {
    //const value = parseInt(Math.random() * 100, 10);
    const value = this.state.percent + 24;
    this.setState({
      percent: value,
    });
    this.colorValue(value);
  }

  render() {
    const { percent, color } = this.state;
    const containerStyle = {
      width: '250px',
    };
    return (
      <div>

        <AlertScore value={percent}/>

        <div className="score">
          <Button onClick={this.changeState} variant="dark" size="lg" >
            Score   <Badge variant="light"> {' '}{percent} </Badge> 
          </Button>
        </div>

        <div style={containerStyle}>
          <Line className="progress-pos" percent={percent} strokeWidth="8" strokeColor={color} />
        </div>

      </div>
    );
  }
}