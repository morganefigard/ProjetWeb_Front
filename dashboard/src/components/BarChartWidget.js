import './BarChartWidget.css';
import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
    {name: 'Artist A', likes: 300},
    {name: 'Artist B', likes: 200},
    {name: 'Artist C', likes: 400},
    {name: 'Artist D', likes: 500},
    {name: 'Artist E', likes: 300}
    ];

export default class BarChartWidget extends Component {
  render() {
    return (
      <div className="BarChartWidget">
        <h3>Number of likes per artist</h3>
        <ResponsiveContainer width='99%' height={300}>
            <BarChart data={data} margin={{ top: 0, right: 0, bottom: 0, left: -25 }} >
                <Bar radius={[10, 10, 0, 0]} dataKey="likes" fill="#f75670" />
                <XAxis dataKey="name" stroke='#5d576b' />
                <YAxis stroke='#5d576b' />
            </BarChart>
        </ResponsiveContainer>
      </div>
    )
  }
}
