import React, {Component} from 'react';
import WeatherDisplay from './weatherDisplay'


type Props = {

}

type State = {
    latitude: number,
    longitude: number,
    weather: number
    location: string
}

export default class Weather extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            latitude: 0,
            longitude: 0,
            weather: 0,
            location: ""
        }
    }

    coordsAllowed = (e: any) => {
        this.setState({
            latitude: Math.round(e.coords.latitude),
            longitude: Math.round(e.coords.longitude)
        })
    }

    coordsFailed = () => {
        console.log("Location services have been turned off")
    }

    componentDidMount = () => {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.coordsAllowed, this.coordsFailed)
        }
    }

    componentDidUpdate = ({}, prevState: State) => {
        if (prevState.latitude !== this.state.latitude) {
            this.weatherFetch();
        }
    }
    

    weatherFetch = () => {
        const baseURL = 'https://api.openweathermap.org/data/2.5/weather';
        const key = '4e531f0413b09c60d9b522b5479f1ff1';

        fetch(`${baseURL}?lat=${this.state.latitude}&lon=${this.state.longitude}&appid=${key}`)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            this.setState({
                weather: ((Math.floor((json.main.temp - 273.15)*(9/5)+32))),
                location: json.name
            })
        })
    }

  render() {
      return (
          <div>
            <WeatherDisplay location={this.state.location} weather={this.state.weather} />
          </div>
      )
  }
}