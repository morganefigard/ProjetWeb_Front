import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import 'bootstrap/dist/css/bootstrap.css';
import Stats from '../components/Stats';
import DateTime from '../components/DateTime';

storiesOf('Button', module)
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));   

storiesOf('Stats', module).add('Stats with icon', () => (
  <Stats></Stats>
));

storiesOf('Time', module).add('Date and clock', () => (
  <DateTime></DateTime>
));