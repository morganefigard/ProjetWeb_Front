import './ProgressBarsWidget.css';
import React, { Component } from 'react';

export default class ProgressBarsWidget extends Component {
  render() {
    return (
      <div className="ProgressBarsWidget">
        <h4 className="graph-title">Most listened songs of Album A</h4>
        <div className="table-responsive">
            <table className="table table-hover">
            <tbody>
                <tr>
                    <td style={{width: 26.66 + '%'}}>
                        Song A
                    </td>
                    <td>
                        <div className="progress">
                            <div className="progress-bar-custom" role="progressbar" style={{flex: 1}}>
                                <p className="progress-bar-text">725</p>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style={{width: 26.66 + '%'}}>
                        Song B
                    </td>
                    <td>
                        <div className="progress">
                            <div className="progress-bar-custom" role="progressbar" style={{flex: 0.83}}>
                                <p className="progress-bar-text">602</p>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style={{width: 16.66 + '%'}}>
                        Song C
                    </td>
                    <td>
                        <div className="progress">
                            <div className="progress-bar-custom" role="progressbar" style={{flex: 0.7}}>
                                <p className="progress-bar-text">507</p>
                            </div>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
      </div>
    )
  }
}
