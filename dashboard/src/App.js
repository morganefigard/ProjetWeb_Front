import './App.css';
import React, { Component } from 'react';
import Route from './routes';
import { Row, Col, Container } from 'reactstrap';
import NavbarHeader from './components/NavbarHeader';
import DateTime from './components/DateTime';
import Stats from './components/Stats'
import WeatherLocation from './components/WeatherLocation';
import ProgressBarsWidget from './components/ProgressBarsWidget';
import BarChartWidget from './components/BarChartWidget';
import PieChartWidget from './components/PieChartWidget';

class App extends Component {
  render() {
    return (
      <div>
        <Route />
      </div>
    );
  }
}

export default App;
