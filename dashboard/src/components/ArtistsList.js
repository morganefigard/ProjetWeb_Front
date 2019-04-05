import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import './ArtistsList.css';
import axios from 'axios';
import { MDBDataTable } from 'mdbreact';

export default class ArtistsList extends Component {
  constructor() {
    super();
    
    this.state = {
      artists: [], 
      columns: [
        {
          label: 'Name ▴▾',
          field: 'name',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Date of birth ▴▾',
          field: 'birthdate',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Number of followers ▴▾',
          field: 'followers',
          sort: 'asc',
          width: 150
        },
      ]
    }

    this.refreshList = this.refreshList.bind(this);
  }

  componentWillMount() {
    axios.get("http://localhost:3030/artist/sorted").then(({ data }) => {
      for (var i=0; i<data.length; i++) {
        this.setState(prevState => ({
          artists: [...prevState.artists, { "name": data[i].name, "birthdate": data[i].birth, "followers": data[i].followers }]
        }));
      }
    })
  }

  refreshList() {
    this.setState({artists: []});
    axios.get("http://localhost:3030/artist/sorted").then(({ data }) => {
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
      <h5 className="artist-list-title">LIST OF ALL ARTISTS <Button onClick={this.refreshList} outline color="secondary" className="littleMarginLeft">Update</Button></h5>
          <MDBDataTable
          striped
          bordered
          hover
          data={{"columns": this.state.columns, "rows": this.state.artists}}
        />
      </div>
    )
  }
}
