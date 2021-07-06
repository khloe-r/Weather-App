import React, {useState, useEffect} from 'react';

function Weather(props) {
    const[data, setData] = useState(props.city);

    // useEffect(() => {
    //     fetch(`https://api.github.com/users/${login}`)
    //     // Grabs data from api
    //     .then(response => response.json())
    //         // Converts to json file
    //     .then(setData);
    //         // sets data state to the json
    // }, [])

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