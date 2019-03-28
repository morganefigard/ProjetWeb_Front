import './Stats.css';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

export default class Stats extends Component {
  render() {
    return (
      <div className="Stats">
        <h1 className="display-4">
            <strong>250 275</strong><br />
        </h1>
        <p>Active users <FontAwesomeIcon icon={faUsers} /></p>
      </div>
    )
  }
}
