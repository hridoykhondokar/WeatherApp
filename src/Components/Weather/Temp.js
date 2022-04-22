import React, { useEffect, useState } from 'react'
import "./Style.css";
import TempCard from './TempCard';

const Temp = () => {

    const [searchValue, setSearchValue] = useState("Dhaka");
       const [weatherData,setWeatherData] = useState('');



    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=c0efec1a866fe80f99721d690a478ac9`
            let res = await fetch(url);
            let data = await res.json();

            const { temp, humidity, pressure } = data.main;
            const { main: weathermood } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys;

            const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset
            }

            setWeatherData(myNewWeatherInfo)

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getWeatherInfo()

    },[]);

    return (
        <>

            {/* our input field */}
            <div className="wrap">
                <div className="search">
                    <input type="search"
                        placeholder="Search..."
                        autoFocus
                        className="searchTerm"
                        value={searchValue}
                        onChange={(event) => setSearchValue(event.target.value)}
                    />
                    <button
                        className="searchButton"
                        type="button"
                        onClick={getWeatherInfo}

                    >
                        Search
                    </button>
                </div>
            </div>

            {/* our temp card */}

           <TempCard weatherData={weatherData}></TempCard>



        </>
    )
}

export default Temp