import './ProgressBarsWidget.css';
import React, { Component } from 'react';
import axios from 'axios';

export default class ProgressBarsWidget extends Component {
  constructor() {
    super();
    
    this.state = {
      dataFromDB: []
    }
  }
  componentWillMount() {
    axios.get("http://localhost:3030/artist/topFollowers").then(({ data }) => {
      console.log(data);
      for (var i=0; i<data.length; i++) {
        this.setState(prevState => ({
          dataFromDB: [...prevState.dataFromDB, { "name": data[i].name, "followers": data[i].followers }]
        }))
      }
    })
  }

  render() {
    return (
      <div className="ProgressBarsWidget">
        <h4 className="graph-title">Artists with the most followers</h4>
        <div className="table-responsive">
            <table className="table table-hover">
            <tbody>
                {this.state.dataFromDB.map(function(entry, index){
                    return (
                        <tr key={index}>
                            <td style={{width: 16.66 + '%'}}>
                                {entry.name}
                            </td>
                            <td>
                                <div className="progress">
                                    <div className="progress-bar-custom" role="progressbar" style={{flex: 0.7}}>
                                        <p className="progress-bar-text">{entry.followers}</p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
      </div>
    )
  }
}
