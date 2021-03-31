import React from "react";

type Props = {
  location: string,
  weather: number
}

const WeatherDisplay = (props: Props) => {
    console.log(props)
    return (
        <div>
            <h3>Welcome to {props.location}</h3>
            <h4> The current temp is: {props.weather} °F </h4>
        </div>
    )
}

export default WeatherDisplay;