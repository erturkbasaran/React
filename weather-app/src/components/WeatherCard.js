import moment from 'moment'


const getDate = (date) => {
    return moment.unix(date).format("dddd");
};


const currentDate = (date) => {
    const today = moment().format('DD/MM/YYYY');
    const weatherDate = moment.unix(date).format('DD/MM/YYYY')
    return moment(today, "DD/MM/YYYY").diff(moment(weatherDate, "DD/MM/YYYY"))

}

const WeatherCard = ({ temp, dt, weather }) => {

    const { min, max } = temp
    const { main, icon } = weather



    return (


        <div id="weatherWrapper" className={`card ${currentDate(dt) === 0 ? "today" : ""}`}>
            <div className="weatherCard">
                <div className="currentTemp">
                    <span className="tempMax">{Math.floor(max)}&deg;</span>
                    <span className="tempMin">{Math.floor(min)}&deg;</span>
                    <span className="day">{getDate(dt)}</span>
                </div>
                <div className="currentWeather">
                    <span className="img"><img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" /></span>
                    <div className="info">
                        <div className="main">{main}</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default WeatherCard


