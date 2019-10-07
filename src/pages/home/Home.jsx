import React, { Component } from 'react';
import './Home.css';

class Home extends Component {

  render() {
    return (
      <div className="row">
        <h1 id="protoss-gameplay"> Introduction to Protoss gameplay</h1>
        <a id="homework-links" 
          href="https://homeworks-aws-learning-series.s3.amazonaws.com/pylon-construction.png">
          https://homeworks-aws-learning-series.s3.amazonaws.com/pylon-construction.png
        </a>
      </div>
    )
  }
  
}

export default Home;