import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default class Stats extends Component {
  render() {
    return (
      <div>
        <h1 class="display-4">
            <strong>150 275</strong><br />
        </h1>
        <big class="text-muted"><FontAwesomeIcon icon={faCoffee} /> Active customers</big>
      </div>
    )
  }
}
