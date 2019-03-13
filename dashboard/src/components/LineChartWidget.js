import React, { Component } from 'react';
import { LineChart, Line } from 'recharts';

const data = [
    {name: 'Page A', uv: 300, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 200, pv: 2400, amt: 2400},
    {name: 'Page C', uv: 400, pv: 2400, amt: 2400},
    {name: 'Page D', uv: 200, pv: 2400, amt: 2400},
    {name: 'Page E', uv: 300, pv: 2400, amt: 2400}
    ];

export default class LineChartWidget extends Component {
  render() {
    return (
      <div>
        <LineChart width={400} height={400} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        </LineChart>
      </div>
    )
  }
}
