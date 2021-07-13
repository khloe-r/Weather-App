import React from 'react'

function MissingWeather(props) {
    return (
        <header className={`pt-3 ${props.city?.current?.is_day === 1? 'text-gray-800' : 'text-white'}`}>
            <h5>Enter a city name to get started!</h5>
        </header>
    )
}

export default MissingWeather;