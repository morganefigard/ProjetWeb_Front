import React, { Component } from 'react';
import './Widgets.css';
import { Row, Col } from 'reactstrap';
import DateTime from '../components/DateTime';
import Stats from '../components/Stats'
import WeatherLocation from '../components/WeatherLocation';
import ProgressBarsWidget from '../components/ProgressBarsWidget';
import BarChartWidget from '../components/BarChartWidget';
import PieChartWidget from '../components/PieChartWidget';
import StatsCream from '../components/StatsCream';
import StatsBlue from '../components/StatsBlue';

export default class Widgets extends Component {
  render() {
    return (
      <div className="Widgets">
        <Row>
          <Col lg="8" sm="12">
            <Row>
              <Col lg="4" sm="4">
                <Stats></Stats>
              </Col>
              <Col lg="4" sm="4">
                <StatsCream></StatsCream>
              </Col>
              <Col lg="4" sm="4">
                <StatsBlue></StatsBlue>
              </Col>
              <Col lg="12" sm="12">
              <BarChartWidget></BarChartWidget>
              </Col>
            </Row>
          </Col>
          <Col lg="4" sm="12">
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
        <Row>
        <Col lg="6" md="6">
            <DateTime></DateTime>
          </Col>
          <Col lg="6" md="6">
            <WeatherLocation></WeatherLocation>
          </Col>
        </Row>
      </div>
    )
  }
}
