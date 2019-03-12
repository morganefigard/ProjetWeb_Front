import React, { Component } from 'react'

export default class DateTime extends Component {
    constructor() {
        super();

        var today = new Date();
        var days = new Array();
        days[0] = "Sunday";
        days[1] = "Monday";
        days[2] = "Tuesday";
        days[3] = "Wednesday";
        days[4] = "Thursday";
        days[5] = "Friday";
        days[6] = "Saturday";
        var months = new Array();
        months[0] = "January";
        months[1] = "February";
        months[2] = "March";
        months[3] = "April";
        months[4] = "May";
        months[5] = "June";
        months[6] = "July";
        months[7] = "August";
        months[8] = "September";
        months[9] = "October";
        months[10] = "November";
        months[11] = "December";

        var date = days[today.getDay()] + ', ' + months[today.getMonth()] + ' ' + today.getDate();

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
