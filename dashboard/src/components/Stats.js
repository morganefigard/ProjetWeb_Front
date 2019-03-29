import './Stats.css';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';

export default class Stats extends Component {
  render() {
    return (
      <div className="Stats">
        <h1 className="display-4">
            <strong><FontAwesomeIcon icon={faHeadphones} /> 675</strong><br />
        </h1>
        <p>Total number of listenings</p>
      </div>
    )
  }
}
