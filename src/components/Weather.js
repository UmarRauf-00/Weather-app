
import React from 'react';

const Weather = props => (
<div>
    {props.city && props.country && <p><b>Location: </b>{props.city}, {props.country}</p>}    

    {props.temperature && <p><b>Temprature:</b> {props.temperature} Celsius</p> }

    {props.humidity && <p><b>Humidity:</b> {props.humidity}%</p>}

    {props.description && <p><b>Conditions:</b> {props.description}</p>}

    {props.error && <p>{props.error}</p> }

</div>
)

export default Weather