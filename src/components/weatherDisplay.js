import React from "react";

const WeatherDisplay = (props) => {
    console.log(props)
    return (
        <div>
            <h3>Welcome to {props.location}</h3>
            <h4> The current temp is: {props.weather} °F </h4>
        </div>
    )
}

export default WeatherDisplay;