import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import 'bootstrap/dist/css/bootstrap.css';
import Stats from '../components/Stats';
import DateTime from '../components/DateTime';
import WeatherLocation from '../components/WeatherLocation';
import LineChartWidget from '../components/LineChartWidget';

storiesOf('Button', module)
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));   

storiesOf('Small widgets', module)
  .add('Stats with icon', () => (
    <Stats></Stats>
  ))
  .add('Date and clock', () => (
    <DateTime></DateTime>
  ))
  .add('Weather', () => (
    <WeatherLocation></WeatherLocation>
  ));

storiesOf('Charts', module)
  .add('Line chart', () => (
    <LineChartWidget></LineChartWidget>
  ));  