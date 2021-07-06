import React, {useState, useEffect} from 'react';

function Weather(props) {
    return (
      <header>
        <div className="flex justify-center">
            <div className="shadow-xl bg-gray-800 text-white mt-5 p-5 w-80">
                <h1>Weather</h1>
            </div>
        </div>
      </header>
    )
  }

export default Weather;