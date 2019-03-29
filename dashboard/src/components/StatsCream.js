import './StatsCream.css';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

export default class StatsCream extends Component {
  render() {
    return (
      <div className="StatsCream">
        <h1 className="display-4">
            <strong><FontAwesomeIcon icon={faClock} /> 3:47</strong><br />
        </h1>
        <p>Mean song time</p>
      </div>
    )
  }
}
