import React, { Component } from 'react';
import NavbarHeader from './components/NavbarHeader';
import Widgets from './containers/Widgets';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <NavbarHeader></NavbarHeader>
        <Widgets></Widgets>
      </div>
    )
  }
}
