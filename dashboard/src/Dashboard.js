import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import NavbarHeader from './components/NavbarHeader';
import DateTime from './components/DateTime';
import Stats from './components/Stats'
import WeatherLocation from './components/WeatherLocation';
import ProgressBarsWidget from './components/ProgressBarsWidget';
import BarChartWidget from './components/BarChartWidget';
import PieChartWidget from './components/PieChartWidget';
import Widgets from './containers/Widgets';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <NavbarHeader></NavbarHeader>
        <Widgets></Widgets>
      </div>
    )
  }
}
