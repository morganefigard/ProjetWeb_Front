import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import NavbarHeader from './components/NavbarHeader';
import DateTime from './components/DateTime';
import Stats from './components/Stats'
import WeatherLocation from './components/WeatherLocation';
import ProgressBarsWidget from './components/ProgressBarsWidget';
import BarChartWidget from './components/BarChartWidget';
import PieChartWidget from './components/PieChartWidget';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <NavbarHeader></NavbarHeader>
        
        <Row>
          <Col lg="8" sm="8">
            <Row>
              <Col lg="4" sm="4">
                <Stats></Stats>
              </Col>
              <Col lg="4" sm="4">
                <DateTime></DateTime>
              </Col>
              <Col lg="4" sm="4">
                <WeatherLocation></WeatherLocation>
              </Col>
              <Col lg="12" sm="12">
              <BarChartWidget></BarChartWidget>
              </Col>
            </Row>
          </Col>
          <Col lg="4" sm="4">
            <Row>
              <Col lg="12" sm="12">
                <ProgressBarsWidget></ProgressBarsWidget>
              </Col>
              <Col lg="12" sm="12">
                <PieChartWidget></PieChartWidget>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}
