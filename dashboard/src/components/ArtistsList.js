import React, { Component } from 'react';
import { Table } from 'reactstrap';
import './ArtistsList.css';
import axios from 'axios';

export default class ArtistsList extends Component {
  constructor() {
    super();
    
    this.state = {
      artists: []
    }
  }

  componentWillMount() {
    axios.get("http://localhost:3030/artist").then(({ data }) => {
      console.log(data);
      for (var i=0; i<data.length; i++) {
        this.setState(prevState => ({
          artists: [...prevState.artists, { "name": data[i].name, "birthdate": data[i].birth, "followers": data[i].followers }]
        }))
      }
    })
  }

  render() {
    return (
      <div className="ArtistsList">
      <h5 className="artist-list-title">LIST OF ALL ARTISTS</h5>
        <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Birth date</th>
            <th>Number of followers</th>
          </tr>
        </thead>
        <tbody>
          {this.state.artists.map(function(artist, index){
                return (
                  <tr key={index}>
                    <td>{artist.name}</td>
                    <td>{artist.birthdate}</td>
                    <td>{artist.followers}</td>
                  </tr>
                )
            })}
        </tbody>
      </Table>
      </div>
    )
  }
}
