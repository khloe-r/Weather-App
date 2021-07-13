import React, {useReducer, useState} from 'react';

function Hourly(props) {
  const [date, setDate] = useState(0); 
  const forecastObj = props.forecast?.forecast?.forecastday[date].hour
  return (
     <div>
        <div className="grid grid-cols-3">
          <h2 className={`cursor-pointer ${date === 0 ? "underline" : "text-gray-400"}`} onClick={() => setDate(0)}>Today</h2>
          <h2 className={`cursor-pointer ${date === 1 ? "underline" : "text-gray-400"}`} onClick={() => setDate(1)}>Tomorrow</h2>
          <h2 className={`cursor-pointer ${date === 2 ? "underline" : "text-gray-400"}`} onClick={() => setDate(2)}>The Day After</h2>
        </div>
        <div className="grid grid-cols-6 pt-4">
            {forecastObj?.filter((hr, i) => i % 4 === 0).map((hour) => (
              <div className="pr-1 pl-1">
                <h1>{hour.time.substring(11, 16)}</h1>
                <img className="inline h-1/2" src={hour.condition.icon} alt={hour.condition.text}/>
                <h1>{hour.temp_c}<sup>o</sup>C</h1>
              </div>
            ))}
        </div>
     </div>
  )}

function Daily(props) {
  const forecastObj = props.forecast?.forecast?.forecastday.map((day, i) => ({id: i, data: day}))
  console.log(forecastObj)
  return (
    <div className="grid grid-cols-3 pt-4">
        {forecastObj?.map((day) => (
          <div className="">
            <h1>{day.data.date.substring(5, 10)}</h1>
            <img className="inline h-1/2" src={day.data.day.condition.icon} alt={day.data.day.condition.text}/>
            <h1>{day.data.day.avgtemp_c}<sup>o</sup>C</h1>
            <p className="text-gray-400 text-xs">{day.data.day.mintemp_c}<sup>o</sup>C</p>
          </div>
        ))}
    </div>
  )
}

function Weather(props) {
    const [daily, toggle] = useReducer(
      (daily) => !daily, // defines the function
      true // initial value
    );
    console.log(props)
    return (
      <header>
        <div className="flex justify-center">
            <div className="shadow-xl bg-gray-800 text-white mt-5 p-5 grid grid-cols-3 w-full xl:w-1/3 lg:w-1/3 md:w-1/2">
              <div className="col-span-2">
                <img className="inline" src={props.city.current.condition.icon} alt={props.city.current.condition.text}/>
                <h1>Today</h1>
                <h1 className="text-7xl pb-2">{props.city.current?.temp_c}<span className="text-base text-gray-400 align-top"><sup>o</sup>C</span></h1>
                <h1 className="text-gray-400">{props.city.location?.name}, {props.city.location?.country}</h1>
                <h5 className="text-xs">Feels like {props.city.current.feelslike_c}<sup>o</sup>C&emsp;Last Updated {props.city.current.last_updated.substring(11,16)} LT</h5>
              </div>
              <div>
                <h1 className="text-gray-400 text-xs pt-2">Wind Speed</h1>
                <h1>{props.city.current?.wind_kph} kph</h1>
                <h1 className="text-gray-400 text-xs pt-3">Humidity</h1>
                <h1>{props.city.current?.humidity}%</h1>
                <h1 className="text-gray-400 text-xs pt-3">UV Index</h1>
                <h1>{props.city.current?.uv}</h1>
                <h1 className="text-gray-400 text-xs pt-3">Precipitation</h1>
                <h1>{props.city.current?.precip_in} in</h1>
              </div>
            </div>
        </div>
          <div className="flex justify-center">
            <div className="shadow-xl bg-gray-800 text-white mt-5 p-5 w-full xl:w-1/3 lg:w-1/3 md:w-1/2">
              <h1>
                <span className="text-xl pr-5 cursor-pointer" onClick={() => toggle()}>&lt; </span>
                {daily ? ' Daily ' : ' Hourly '}
                <span className="text-xl pl-5 cursor-pointer" onClick={() => toggle()}> &gt;</span></h1>
              {daily ? <Daily forecast={props.forecast}/> : <Hourly forecast={props.forecast}/>}
            </div>
          </div>
      </header>
    )
  }

export default Weather;