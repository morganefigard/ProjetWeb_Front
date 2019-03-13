import './PieChartWidget.css';
import React, { Component } from 'react';
import { Cell, PieChart, Pie, ResponsiveContainer, Legend } from 'recharts';

const data = [
    {name: 'Genre A', songs: 330},
    {name: 'Genre B', songs: 270},
    {name: 'Genre C', songs: 410},
    {name: 'Genre D', songs: 580},
    {name: 'Other', songs: 1230}
    ];

const colors = ['#99e1d9', '#f75670', '#99e1d9', '#f75670', '#5d576b'];

export default class PieChartWidget extends Component {
  render() {
    return (
      <div className="PieChartWidget">
        <h3 className="graph-title">Number of songs per genre</h3>
        <ResponsiveContainer width='99%' height={300}>
            <PieChart>
                <Pie data={data} dataKey="songs" cx="50%" cy="50%" innerRadius={50} outerRadius={80} fill="#f75670" startAngle={90} endAngle={450} label >
                {
                    data.map((entry, index) => (
                    <Cell fill={colors[index]}/>
                    ))
                }
                </Pie>
                <Legend />
            </PieChart>
        </ResponsiveContainer>
      </div>
    )
  }
}
