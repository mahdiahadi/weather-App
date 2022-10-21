import React, { useState,useEffect } from 'react'
import './App.css'
import { useGetWeatherQuery } from './services/WeatherApi'
const App = () => {
  const [query, setQuery] = useState('Tehran')
  const { data: weather } = useGetWeatherQuery(query)
  const[weathers,setWeathers]=useState([])


  // useEffect(() => {
  //   const fetchData=weather?.name?.toLowerCase().includes(query);
  //   setWeathers(fetchData)
  //   console.log(weathers)
  // }, [query,weather])
  const search =(e)=>{
    if(e.key === 'Enter'){
      setWeathers(weather)
      setQuery("")
      console.log(weather)
    }
  }
  

  // const search= (e) =>{
  //   if( e.key==="Enter"){
  //     const data=useGetWeatherQuery(query);
      
  //     setWeathers(data)
  //     setQuery('')
  //   }

  return (
    <div className='main-container'>
      <input type="text"className="search"placeholder="Search..."value={query}onChange={(e) => setQuery(e.target.value)}onKeyPress={search}
      />
        {weathers?.main && (
                <div className="city">
                    <h2 className="city-name">
                        <span>{weathers?.name}</span>
                        <sup>{weathers?.sys?.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {Math.round(weathers?.main?.temp)}
                        <sup>&deg;F</sup>
                    </div>
                    <div className="info">
                    <img className="city-icon" src={`https://openweathermap.org/img/wn/${weathers?.weather?.[0]?.icon}@2x.png`} alt={weathers?.weather?.[0]?.description} />
                        <p>{weathers?.weather?.[0]?.description}</p>
                    </div>
                </div>
            )} 
    </div>
  )
}

export default App