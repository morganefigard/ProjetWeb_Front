import './StatsBlue.css';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default class StatsBlue extends Component {
  render() {
    return (
      <div className="StatsBlue">
        <h1 className="display-4">
            <strong><FontAwesomeIcon icon={faHeart} /> 253</strong><br />
        </h1>
        <p>Total number of likes</p>
      </div>
    )
  }
}
