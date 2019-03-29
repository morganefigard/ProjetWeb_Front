import './BarChartWidget.css';
import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';

const data = [
    {name: 'Track A', likes: 590},
    {name: 'Track B', likes: 457},
    {name: 'Track C', likes: 335},
    {name: 'Track D', likes: 295},
    {name: 'Track E', likes: 250},
    {name: 'Track F', likes: 190}
    ];

const colors = ['#99e1d9', '#f75670', '#99e1d9', '#f75670', '#99e1d9', '#f75670'];

export default class BarChartWidget extends Component {
  render() {
    return (
      <div className="BarChartWidget">
        <h3 className="graph-title">Top 6 most liked tracks</h3>
        <ResponsiveContainer width='99%' height={300}>
            <BarChart data={data} margin={{ top: 0, right: 0, bottom: 0, left: -25 }} >
                <Bar radius={[10, 10, 0, 0]} dataKey="likes" fill="#f75670">
                {
                    data.map((entry, index) => (
                    <Cell fill={colors[index]} key={index}/>
                    ))
                }
                </Bar>
                <XAxis dataKey="name" stroke='#5d576b' />
                <YAxis stroke='#5d576b' />
            </BarChart>
        </ResponsiveContainer>
      </div>
    )
  }
}
