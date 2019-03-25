import React, { Component } from 'react';
import { Table } from 'reactstrap';
import './ArtistsList.css';

export default class ArtistsList extends Component {
  render() {
    return (
      <div className="ArtistsList">
        <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Birth date</th>
            <th>Number of followers</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Artist 1</td>
            <td>01/01/1900</td>
            <td>500</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Artist 2</td>
            <td>01/01/1900</td>
            <td>500</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Artist 3</td>
            <td>01/01/1900</td>
            <td>500</td>
          </tr>
        </tbody>
      </Table>
      </div>
    )
  }
}
