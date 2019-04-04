import './BarChartWidget.css';
import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';
import axios from 'axios';

/*const data = [
    {name: 'Track A', likes: 590},
    {name: 'Track B', likes: 457},
    {name: 'Track C', likes: 335},
    {name: 'Track D', likes: 295},
    {name: 'Track E', likes: 250},
    {name: 'Track F', likes: 190}
    ];*/

let dataFromDB = [];

const colors = ['#99e1d9', '#f75670', '#99e1d9', '#f75670', '#99e1d9', '#f75670'];

export default class BarChartWidget extends Component {
  componentWillMount() {
    axios.get("http://localhost:3030/track/mostLiked").then(({ data }) => {
      console.log(data);
      for (var i=0; i<data.length; i++) {
        dataFromDB.push({"title": data[i].title, "likes": data[i].likes});
      }
    })
  }

  render() {
    return (
      <div className="BarChartWidget">
        <h3 className="graph-title">Top 6 most liked tracks</h3>
        <ResponsiveContainer width='99%' height={300}>
            <BarChart data={dataFromDB} margin={{ top: 0, right: 0, bottom: 0, left: -25 }} >
                <Bar radius={[10, 10, 0, 0]} dataKey="likes" fill="#f75670">
                {
                    dataFromDB.map((entry, index) => (
                    <Cell fill={colors[index]} key={index}/>
                    ))
                }
                </Bar>
                <XAxis dataKey="title" stroke='#5d576b' />
                <YAxis stroke='#5d576b' />
            </BarChart>
        </ResponsiveContainer>
      </div>
    )
  }
}
