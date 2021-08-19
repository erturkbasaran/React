import { createContext, useContext, useState } from "react";

const CityContext = createContext();

const CityProvider = ({ children }) => {

    const [city, setCity] = useState({


        "id": 35,
        "name": "İzmir",
        "latitude": 38.4189,
        "longitude": 27.1287

    })

    const values = {
        city,
        setCity
    }

    return <CityContext.Provider value={values}>{children}</CityContext.Provider>

}

const useCity = () => useContext(CityContext);

export { CityProvider, useCity }