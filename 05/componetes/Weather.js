import React from "react"


class Weather extends React.Component{

  state = {
    
    weather: null

  }

  componentDidMount(){

    const { lat, lng } = this.props
    this.fetchWeather(lat, lng)

  }

  componentDidUpdate(prevProps){

    if (
      prevProps.lat !== this.props.lat || prevProps.lng !== this.props.lng // zmiana pobierze nowe props'y 
    ) {
      this.fetchWeather(this.props.lat, this.props.lng)
    }

  }

  fetchWeather(lat, lng){

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(res.status)
        return res.json()
      })
      .then((data) => {
        this.setState({ weather: data.current_weather })
      })
      .catch((err) => console.error(err))
  }

  render(){
    const { lat, lng } = this.props
    const { weather } = this.state

    if (weather === null){
      return <p>Ładowanie danych pogodowych…</p>
    }

    return(

      <section className="weather">
        <p>
          Pogodę w obecnej chwili w miejscu o szerokości geograficznej:
          <b className="weather__lat"> {lat}</b> i długości:
          <b className="weather__lng"> {lng}</b> można określić
          jako: <b className="weather__summary">temperatura</b>,
          gdzie temperatura wynosi:
          <b className="weather__temperature">
            {weather.temperature}°C
          </b>
        </p>
      </section>
    )
  }
}

export default Weather
