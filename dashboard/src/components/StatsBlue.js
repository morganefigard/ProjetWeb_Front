import './StatsBlue.css';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


export default class StatsBlue extends Component {
  
  constructor() {
    super();
    
    this.state = {
      totalNumberOfLikes: 0
    }
  }

  componentWillMount() {
    axios.get("http://localhost:3030/track/likeCount").then(({ data }) => {
      this.setState({totalNumberOfLikes : data[0].total});
    });
  }

  render() {
    return (
      <div className="StatsBlue">
        <h1 className="display-4">
            <strong><FontAwesomeIcon icon={faHeart} /> {this.state.totalNumberOfLikes}</strong><br />
        </h1>
        <p>Total number of likes</p>
      </div>
    )
  }
}
