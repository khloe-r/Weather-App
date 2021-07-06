import React, {useState} from 'react'
import './App.css';
import './index.css';
import Weather from './Weather.js'
import MissingWeather from './MissingWeather.js';

function App() {
  let today = new Date()
  const [city, setCity] = useState("");
  const [search, setSearch] = useState();

  const handleInput = (event, value) => {
    console.log(event)
    setCity(event.target.value)
  }

  const handleSearch = () => {
    setSearch(city)
  }


  return (
    <div className="App font-sans">
      <h1 className="text-5xl pt-10">Hello Weather!</h1>
      <h4 className="text-xl pt-2">Today is {today.toLocaleString('default', { month: 'long' })} {today.getDate()}, {today.getFullYear()}</h4>
      <div className="pt-7">
        <h4 className="text-xl pt-2 pb-2">Find Your City</h4>
        <input id="city" className="border-2 border-gray100 w-60 h-10 pl-2" type="text" value={city} onChange={handleInput.bind(this)} />
        <button className="bg-gray-800 text-white p-2" onClick={handleSearch}>Search</button>
      </div>
      {search ? <Weather city={search}/> : <MissingWeather />}
      <p className="text-xs text-gray-400 pt-8">Powered by <a href="https://www.weatherapi.com/" title="Weather API" className="text-blue-500">WeatherAPI.com</a></p>
    </div>
  );
}

export default App;
