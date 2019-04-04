import './PieChartWidget.css';
import React, { Component } from 'react';
import { Cell, PieChart, Pie, ResponsiveContainer, Legend } from 'recharts';
import axios from 'axios';

/*const data = [
    {name: 'A', songs: 330},
    {name: 'B', songs: 270},
    {name: 'C', songs: 410},
    {name: 'D', songs: 580},
    {name: 'Other', songs: 1230}
    ];*/

let dataFromDB = [];

const colors = ['#99e1d9', '#f75670', '#99e1d9', '#f75670', '#5d576b'];

export default class PieChartWidget extends Component {
  componentWillMount() {
    axios.get("http://localhost:3030/album/findGenre").then(({ data }) => {
      console.log(data);
      for (var i=0; i<data.length; i++) {
        dataFromDB.push({"name": data[i]._id, "total": data[i].total});
      }
    })
  }

  render() {
    return (
      <div className="PieChartWidget">
        <h3 className="graph-title">Songs per genre</h3>
        <ResponsiveContainer width='99%' height={300}>
            <PieChart>
                <Pie data={dataFromDB} dataKey="total" cx="50%" cy="40%" innerRadius={30} outerRadius={50} fill="#f75670" startAngle={90} endAngle={450} label >
                {
                    dataFromDB.map((entry, index) => (
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
