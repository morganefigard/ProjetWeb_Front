import './ProgressBarsWidget.css';
import React, { Component } from 'react';

export default class ProgressBarsWidget extends Component {
  render() {
    return (
      <div className="ProgressBarsWidget">
        <h4 class="graph-title">Most listened songs of Album A</h4>
        <div class="table-responsive">
            <table class="table table-hover">
            <tbody>
                <tr>
                    <td style={{width: 26.66 + '%'}}>
                        Song A
                    </td>
                    <td>
                        <div class="progress">
                            <div class="progress-bar-custom" role="progressbar" style={{flex: 1}}>
                                <p class="progress-bar-text">725</p>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style={{width: 26.66 + '%'}}>
                        Song B
                    </td>
                    <td>
                        <div class="progress">
                            <div class="progress-bar-custom" role="progressbar" style={{flex: 0.83}}>
                                <p class="progress-bar-text">602</p>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style={{width: 16.66 + '%'}}>
                        Song C
                    </td>
                    <td>
                        <div class="progress">
                            <div class="progress-bar-custom" role="progressbar" style={{flex: 0.7}}>
                                <p class="progress-bar-text">507</p>
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
