import './Stats.css';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';



export default class Stats extends Component {

  constructor() {
    super();
    
    this.state = {
      totalNumberOfListenings: 0
    }
  }

  componentWillMount() {
    axios.get("http://localhost:3030/track/listeningCount").then(({ data }) => {
      console.log(data);
      console.log(data.total);
      console.log(data[0].total);
      this.setState({totalNumberOfListenings : data[0].total});
    });
  }

  render() {
    return (
      <div className="Stats">
        <h1 className="display-4">
            <strong><FontAwesomeIcon icon={faHeadphones} /> {this.state.totalNumberOfListenings}</strong><br />
        </h1>
        <p>Total number of listenings</p>
      </div>
    )
  }
}
