import './DateTime.css';
import React, { Component } from 'react';
import Clock from 'react-live-clock';

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
        <div className="DateTime">
            <p><big>{this.state.date}</big></p>
            <h1 class="display-4">
                <strong>
                <Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/Paris'} />
                </strong>
            </h1>
        </div>
    )
  }
}
