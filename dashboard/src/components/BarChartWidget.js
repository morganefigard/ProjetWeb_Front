import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
    {name: 'Page A', uv: 300},
    {name: 'Page B', uv: 200},
    {name: 'Page C', uv: 400},
    {name: 'Page D', uv: 500},
    {name: 'Page E', uv: 300}
    ];

export default class BarChartWidget extends Component {
  render() {
    return (
      <div>
        <ResponsiveContainer width='99%' height={300}>
            <BarChart data={data}>
                <Bar type="monotone" dataKey="uv" stroke="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis />
            </BarChart>
        </ResponsiveContainer>
      </div>
    )
  }
}
