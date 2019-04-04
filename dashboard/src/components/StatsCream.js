import './StatsCream.css';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


export default class StatsCream extends Component {
  constructor() {
    super();
    
    this.state = {
      meanDuration: 0
    }
  }

  componentWillMount() {
    axios.get("http://localhost:3030/track/avgTime").then(({ data }) => {
      console.log(data);
      console.log(data.total);
      console.log(data[0].total);
      this.setState({meanDuration : data[0].total});
    });
  }

  render() {
    return (
      <div className="StatsCream">
        <h1 className="display-4">
            <strong><FontAwesomeIcon icon={faClock} /> {this.state.meanDuration}s</strong><br />
        </h1>
        <p>Mean song time</p>
      </div>
    )
  }
}
