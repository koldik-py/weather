import { createAsyncThunk } from '@reduxjs/toolkit'
import sunIcon from '../assets/Солнце.svg'
import cloudsIcon from '../assets/тучи.svg'
import rainIcon from '../assets/дождь.svg'
import mixedWeatherIcon from '../assets/тучи дождь.svg'
import windIcon from '../assets/ветер.svg'

const weatherIconMap = {
  '01d': sunIcon, // clear sky day
  '01n': sunIcon, // clear sky night
  '02d': cloudsIcon, // few clouds day
  '02n': cloudsIcon, // few clouds night
  '03d': cloudsIcon, // scattered clouds day
  '03n': cloudsIcon, // scattered clouds night
  '04d': cloudsIcon, // broken clouds day
  '04n': cloudsIcon, // broken clouds night
  '09d': rainIcon, // shower rain day
  '09n': rainIcon, // shower rain night
  '10d': rainIcon, // rain day
  '10n': rainIcon, // rain night
  '11d': mixedWeatherIcon, // thunderstorm day
  '11n': mixedWeatherIcon, // thunderstorm night
  '13d': rainIcon, // snow day (по аналогии с дождем)
  '13n': rainIcon, // snow night
  '50d': windIcon, // mist day
  '50n': windIcon // mist night
}

const getCustomWeatherIcon = iconCode => {
  return weatherIconMap[iconCode] || sunIcon // по умолчанию солнечная иконка
}

export default getCustomWeatherIcon
