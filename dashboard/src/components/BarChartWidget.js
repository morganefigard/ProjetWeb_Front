import './BarChartWidget.css';
import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';
import axios from 'axios';

const colors = ['#99e1d9', '#f75670', '#99e1d9', '#f75670', '#99e1d9', '#f75670'];

export default class BarChartWidget extends Component {
  constructor() {
    super();

    this.state = {
      dataFromDB : []
    }
  }
  componentWillMount() {
    axios.get("http://localhost:3030/track/mostLiked").then(({ data }) => {
      for (var i=0; i<data.length; i++) {
        this.setState(prevState => ({
          dataFromDB: [...prevState.dataFromDB, { "title": data[i].title, "likes": data[i].likes }]
        }))
      }
    })
  }

  render() {
    return (
      <div className="BarChartWidget">
        <h3 className="graph-title">Top 6 most liked tracks</h3>
        <ResponsiveContainer width='99%' height={300}>
            <BarChart data={this.state.dataFromDB} margin={{ top: 0, right: 0, bottom: 0, left: -25 }} >
                <Bar radius={[10, 10, 0, 0]} dataKey="likes" fill="#f75670">
                {
                    this.state.dataFromDB.map((entry, index) => (
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
