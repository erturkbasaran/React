import cities from '../cities.json'
import { useCity } from '../context/CityContext'


const Header = () => {

    const { setCity } = useCity();

    return (
        <div className="header">

            <h1>Please select a city</h1>

            <select onChange={(e) => setCity(JSON.parse(e.target.value))}>
                {
                    cities.map(city => (
                        <option
                            key={city.id}
                            value={JSON.stringify(city)}
                            selected={city.id === 35}

                        >
                            {city.name}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

export default Header