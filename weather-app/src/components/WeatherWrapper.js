import { useEffect } from 'react'
import axios from 'axios'
import { useWeather } from '../context/WeatherContext'
import Header from './Header';
import { useCity } from '../context/CityContext';
import WeatherList from './WeatherList';



const WeatherWrapper = () => {

    const { data, setData } = useWeather();

    const { city } = useCity();

    useEffect(() => {

        const getData = async (city) => {
            try {

                const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${city.latitude}&lon=${city.longitude}&exclude=current,hourly,minutely,alerts&units=metric&appid=b4c59051f4eb9bff86631c58fefc7156`)
                setData(response.data.daily)

            } catch (error) {

            }
        }

        getData(city);

    }, [city])





    return (
        <div>

            {
                data && (<>
                    <Header />
                    <WeatherList />
                </>)
            }

            <footer>Created by Ertürk - <a href="https://github.com/erturkbasaran"><i className="fab fa-github"></i></a></footer>

        </div>
    )
}

export default WeatherWrapper