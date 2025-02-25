import React from 'react'
import styles from './CityDetails.module.sass'
import CityInfo from '../../components/CityInfo'
import HourlyForecast from '../../components/HourlyForecast'

const CityDetails = props => {
  const dataCity = {
    name: 'Москва', // Название города
    temperature: 5, // Температура (°C)
    weather: 'Дождь', // Тип погоды (ясно, дождь, снег и т.д.)
    feelsLike: 2, // Ощущается как (°C)
    humidity: 80, // Влажность (%)
    windSpeed: 5, // Скорость ветра (м/с)
    pressure: 1012 // Давление (гПа)
  }

  return (
    <div className={styles.container}>
      <CityInfo data={dataCity} />
      <HourlyForecast data={dataCity} />
    </div>
  )
}

export default CityDetails
