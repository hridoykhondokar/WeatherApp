import React, { useEffect, useState } from 'react'

const TempCard = ({ weatherData }) => {

    const { temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset } = weatherData;

    const [weatherState, setWeatherState] = useState('');

    useEffect(() => {
        if (weathermood) {
            switch (weathermood) {
                case "Clouds":
                    setWeatherState("wi-day-cloudy");
                  break;
                  case "Rain":
                    setWeatherState("wi wi-rain");
                  break;
                case "Haze":
                    setWeatherState("wi-fog");
                  break;
                case "Clear":
                    setWeatherState("wi-day-sunny");
                  break;
                case "Mist":
                    setWeatherState("wi-dust");
                  break;
        
                default:
                    setWeatherState("wi-day-sunny");
                  break;
                }
        }
    }, [weathermood])

    

    // converting sec

    let sec = sunset;
    let data = new Date(sec * 1000);
    let timeStart = `${data.getHours()}:${data.getMinutes()}`

    return (
        <>
            <div className="widget">
                <div className="weatherIcon">
                    <i className={`wi ${weatherState}`}></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}&deg;</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">{weathermood}
                        </div>
                        <div className="place">{name} , {country}</div>
                    </div>
                </div>
                <div className="date">
                    {new Date().toLocaleString()}
                </div>

                {/* our fore colum section */}

                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p><i className="wi wi-sunset"></i></p>
                            <p className="extra-info-leftside">
                                {timeStart} <br />sunset
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p><i className="wi wi-rain"></i></p>
                            <p className="extra-info-leftside">
                                {pressure} <br />
                                Pressure
                            </p>
                        </div>
                    </div>

                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p><i className="wi wi-strong-wind"></i></p>
                            <p className="extra-info-leftside">
                                {speed} <br />Speed
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p><i className="wi wi-humidity"></i></p>
                            <p className="extra-info-leftside">
                                {humidity} <br />Humidity
                            </p>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default TempCard