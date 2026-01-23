import React from "react"
import Weather from "./Weather"

class WeatherApp extends React.Component{

    state = {

        lat: "",
        lng: "",
        cities: [

            { name: "Warszawa", lat: 52.232222, lon: 21.008333 },
            { name: "Kraków", lat: 50.061389, lon: 19.938333 },
            { name: "Wrocław", lat: 51.11, lon: 17.022222 },
            { name: "Katowice", lat: 50.258, lon: 19.0275 },
            { name: "Gdańsk", lat: 54.352, lon: 18.6466 }

        ]
    }

    handleCityClick = (city) => {

        this.setState({
            lat: city.lat.toString(),
            lng: city.lon.toString()
        })

    }

    handleInputChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })

    }

    handleSubmit = (e) => {

        e.preventDefault()

        const { lat, lng } = this.state

        if (!lat || !lng){

            alert("Wpisz szerokość i długość geograficzną!")
            return

        }

        this.setState({ lat, lng })
    }

    render(){
        const {lat, lng, cities} = this.state

        return(
            <div>
                <div className="form__row form__row--buttons">

                    {cities.map((city) => (
                        <button
                            key={city.name}
                            type="button"
                            onClick={() => this.handleCityClick(city)}
                            style={{
                                margin: "0.5rem",
                                padding: "0.75rem 1.5rem",
                                border: "1px solid black",
                                borderRadius: "1rem",
                                cursor: "pointer"
                            }}
                        >
                            {city.name}
                        </button>
                    ))}

                </div>

                <form onSubmit={this.handleSubmit} className="form">
                    <input
                        type="text"
                        name="lat"
                        placeholder="Szerokość geograficzna - wymagane"
                        value={lat}
                        onChange={this.handleInputChange}
                        className="form__field form__field--lat"
                    />

                    <input
                        type="text"
                        name="lng"
                        placeholder="Długość geograficzna - wymagane"
                        value={lng}
                        onChange={this.handleInputChange}
                        className="form__field form__field--lng"
                    />

                    <button type="submit">Sprawdź pogodę</button>
                </form>

                {lat && lng && <Weather lat={lat} lng={lng} />} {/* Render warunkowy */}

            </div>
        )
    }
}

export default WeatherApp
