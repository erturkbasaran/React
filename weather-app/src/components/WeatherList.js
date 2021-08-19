import React from 'react'
import { useWeather } from '../context/WeatherContext'
import WeatherCard from './WeatherCard'

const WeatherList = () => {
    const { data } = useWeather();
    return (
        <div className="container">
            {
                data.map((weather, index) => (
                    <WeatherCard
                        key={index}
                        temp={weather.temp}
                        dt={weather.dt}
                        weather={weather.weather[0]}
                    />
                ))
            }

        </div>
    )
}

export default WeatherList