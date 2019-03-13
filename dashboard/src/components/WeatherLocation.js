import React, { Component } from 'react';
import axios from 'axios';

export default class WeatherLocation extends Component {
    constructor() {
        super();

        this.state = {
            outside_temp: null
        };
    }

    componentWillMount() {
        axios.get("https://api.openweathermap.org/data/2.5/weather?q=paris&appid=f0ac9e6079908391d506e2da07a50c18").then(({ data }) => {
            var outside_temp = data.main.temp - 273.15; //get the temperature in degrees celcius
            outside_temp = Math.round(outside_temp);
            console.log(data);
            this.setState({ outside_temp });
          })
          .catch(console.error);
    }

    render() {
        return (
            <div>
                <p>Outside temperature is {this.state.outside_temp}</p>
            </div>
        )
    }
}
