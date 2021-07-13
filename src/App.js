import React, {useState} from 'react'
import './App.css';
import './index.css';
import Weather from './Weather.js'
import MissingWeather from './MissingWeather.js';

function App() {
  let today = new Date()

  const [city, setCity] = useState();
  const [current, setCurrent] = useState(city)
  const [forecast, setForecast] = useState(city)

  const handleInput = (event) => {
    setCity(event.target.value)
    console.log(city)
  }

 const handleSearch = () => {
      fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=${city}`)
      // Grabs data from api
      .then(response => response.json())
          // Converts to json file
      .then(setCurrent);
          // sets data state to the json
      fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API}&q=${city}&days=3`)
      // Grabs data from api
      .then(response2 => response2.json())
          // Converts to json file
      .then(setForecast);
          // sets data state to the json
  }
  
  return (
    <div className={`App font-sans ${current?.current?.is_day === 1? 'bg-white' : 'bg-gray-900'}`}>
      <h1 className={`text-4xl pt-10 font-bold ${current?.current?.is_day === 1? 'text-gray-800' : 'text-white'}`}>Hello Weather!</h1>
      <h4 className={`text-sm pt-2 ${current?.current?.is_day === 1? 'text-gray-800' : 'text-white'}`}>{today.toLocaleString('default', { month: 'long' })} {today.getDate()}, {today.getFullYear()}</h4>
      <div className="pt-2">
        <h4 className={`text-sm pt-2 pb-2 ${current?.current?.is_day === 1? 'text-gray-800' : 'text-white'}`}>Find Your City</h4>
        <input autoComplete="off" id="city" className="border-2 border-gray100 w-60 h-10 pl-2" type="text" value={city} onChange={handleInput.bind(this)} />
        <button className="bg-gray-800 text-white p-2" onClick={handleSearch}>Search</button>
      </div>
      {current ? <Weather city={current} forecast={forecast}/> : <MissingWeather city={current}/>}
      <p className="text-xs text-gray-400 pt-6 pb-6">Powered by <a href="https://www.weatherapi.com/" title="Weather API" className="text-blue-500">WeatherAPI.com</a></p>
    </div>
  );
}

export default App;
