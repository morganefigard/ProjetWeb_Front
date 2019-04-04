import './StatsCream.css';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


export default class StatsCream extends Component {
  constructor() {
    super();
    
    this.state = {
      meanDurationData: 0, 
      meanDurationMinutes: 0,
      meanDurationSeconds: 0, 
      meanDurationMinutesSeconds: "", 
    }
  }

  componentWillMount() {
    axios.get("http://localhost:3030/track/avgTime").then(({ data }) => {
      this.setState({meanDurationData: data[0].total});
      console.log("meanDurationData=" + this.state.meanDurationData);
      this.setState({ meanDurationMinutes: Math.floor(this.state.meanDurationData / 60) });
      console.log("meanDurationMinutes=" + this.state.meanDurationMinutes);
      this.setState({ meanDurationSeconds: this.state.meanDurationData - this.state.meanDurationMinutes * 60 });
      console.log("meanDurationSeconds=" + this.state.meanDurationSeconds);
      this.setState({ meanDurationMinutesSeconds: this.state.meanDurationMinutes + "'" + this.state.meanDurationSeconds + "''" });
    });
  }

  render() {
    return (
      <div className="StatsCream">
        <h1 className="display-4">
            <strong><FontAwesomeIcon icon={faClock} /> {this.state.meanDurationMinutesSeconds}</strong><br />
        </h1>
        <p>Mean song time</p>
      </div>
    )
  }
}
