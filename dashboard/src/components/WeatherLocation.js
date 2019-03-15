import './WeatherLocation.css';
import React, { Component } from 'react';
import axios from 'axios';
import ReactAnimatedWeather from 'react-animated-weather';

export default class WeatherLocation extends Component {
    constructor() {
        super();

        this.state = {
            outside_temp: null,
            icon_id: null,
            icon: null,
            color: '#fcfcfc',
            size: 60,
            animate: true
        };
    }

    componentWillMount() {
        axios.get("https://api.openweathermap.org/data/2.5/weather?q=paris&appid=f0ac9e6079908391d506e2da07a50c18").then(({ data }) => {
            var outside_temp = data.main.temp - 273.15; //get the temperature in degrees celcius
            outside_temp = Math.round(outside_temp);
            console.log(data);

            var icon_id = data.weather[0].icon;
            console.log("Icon id: " + icon_id);
            var icon = "";
            switch(icon_id) {
                case "01d":
                    icon = "CLEAR_DAY";
                    break;
                case "01n":
                    icon = "CLEAR_NIGHT";
                    break;
                case "02d":
                    icon = "PARTLY_CLOUDY_DAY";
                    break;
                case "02n":
                    icon = "PARTLY_CLOUDY_NIGHT";
                    break;
                case "03d":
                case "03n":
                case "04d":
                case "04n":
                    icon = "CLOUDY";
                    break;
                case "09d":
                case "09n":
                case "10d":
                case "10n":
                case "11d":
                case "11n":
                    icon = "RAIN";
                    break;
                case "13d":
                case "13n":
                    icon = "SNOW";
                    break;
                case "50d":
                case "50n":
                    icon = "FOG";
                    break;
            }
            console.log("Icon: " + icon);
            this.setState({ outside_temp });
            this.setState({ icon_id });
            this.setState({ icon });
          })
          .catch(console.error);
    }

    render() {
        return (
            <div className="WeatherLocation">
                <h1 class="display-4 no-show-small"><strong>{this.state.outside_temp}°C </strong><ReactAnimatedWeather icon={this.state.icon} color={this.state.color} size={this.state.size} animate={this.state.animate} /></h1>
                <h1 class="display-4 show-small"><strong>{this.state.outside_temp}°C </strong></h1>
                <p class="no-margin-bottom">Paris, France</p>
            </div>
        )
    }
}
