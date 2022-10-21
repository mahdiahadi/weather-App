import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const baseUrl="https://api.openweathermap.org";
// const weatherApiHeaders={
//     'X-RapidAPI-Key': '97b400afe17d3edc0f7e34821ebe6167',
//     'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
// };
const API_KEY="97b400afe17d3edc0f7e34821ebe6167"
const createRequest=(url)=>({url})

export const WeatherApi=createApi({
    reducerPath:"WeatherApi",
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getWeather:builder.query({
            query:(query)=>createRequest(`/data/2.5/weather?q=${query}&appid=${API_KEY}`)
        })
    })
})

export const{
    useGetWeatherQuery
}=WeatherApi;
