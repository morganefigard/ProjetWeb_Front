import React, { Component } from 'react'

export default class DateTime extends Component {
    constructor() {
        super();

        var today = new Date(),
            date = today.getDay() + '-' + today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        this.state = {
            date: date
        };
    }

    render() {
    return (
      <div>
        <p>{this.state.date}</p>
      </div>
    )
  }
}
