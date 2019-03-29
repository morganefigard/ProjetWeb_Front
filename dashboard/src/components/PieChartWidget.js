import './PieChartWidget.css';
import React, { Component } from 'react';
import { Cell, PieChart, Pie, ResponsiveContainer, Legend } from 'recharts';

const data = [
    {name: 'A', songs: 330},
    {name: 'B', songs: 270},
    {name: 'C', songs: 410},
    {name: 'D', songs: 580},
    {name: 'Other', songs: 1230}
    ];

const colors = ['#99e1d9', '#f75670', '#99e1d9', '#f75670', '#5d576b'];

export default class PieChartWidget extends Component {
  render() {
    return (
      <div className="PieChartWidget">
        <h3 className="graph-title">Songs per genre</h3>
        <ResponsiveContainer width='99%' height={300}>
            <PieChart>
                <Pie data={data} dataKey="songs" cx="50%" cy="40%" innerRadius={30} outerRadius={50} fill="#f75670" startAngle={90} endAngle={450} label >
                {
                    data.map((entry, index) => (
                    <Cell fill={colors[index]} key={index}/>
                    ))
                }
                </Pie>
                <Legend layout="vertical" verticalAlign="middle" align="right"/>
            </PieChart>
        </ResponsiveContainer>
      </div>
    )
  }
}
