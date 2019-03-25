import React, { Component } from 'react'
import ArtistsForm from '../components/ArtistsForm';

export default class Admin extends Component {
  render() {
    return (
      <div>
        Admin page
        <ArtistsForm></ArtistsForm>
      </div>
    )
  }
}
