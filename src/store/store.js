import { configureStore } from "@reduxjs/toolkit"
import { WeatherApi } from "../services/WeatherApi";

const store = configureStore({
    reducer: {
        [WeatherApi.reducerPath]: WeatherApi.reducer
    }
})
export default store;