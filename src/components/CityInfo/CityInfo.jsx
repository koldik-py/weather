import React from 'react'
import PropTypes from 'prop-types'
import styles from './CityInfo.module.sass'

import sun from '../../assets/Солнце.svg'
import icon1 from '../../assets/Влажность.svg'
import icon2 from '../../assets/ветер.svg'
import icon3 from '../../assets/pressure.svg'
import plash from '../../assets/plash.jpg'

const CityInfo = ({ weatherData }) => {
  const {
    name,
    temperature,
    weather,
    feelsLike,
    humidity,
    windSpeed,
    pressure
  } = weatherData
  return (
    <section className={styles.city}>
      <h1 className={styles.title}>Текущая погода</h1>
      <div className={styles.main}>
        <img className={styles.mainImg} src={plash} alt='' />
        <div className={styles.header}>
          <h2 className={styles.name}>{name}</h2>
          <div className={styles.temperature}>
            <img src={sun} alt='' />
            <div className={styles.temperatureInfo}>
              <div className={styles.tempValue}>
                <p>
                  {temperature} <sup>°C</sup>
                </p>
              </div>
            </div>
          </div>
          <span className={styles.weather}>{weather}</span>
        </div>
        <div className={styles.details}>
          <span className={styles.feelsLike}>Ощущается как {feelsLike}°</span>
          <div className={styles.subInfo}>
            <div className={styles.line}>
              <img src={icon1} alt='' />
              <p className={styles.lineInfo}>
                Влажность: <span>{humidity}%</span>
              </p>
            </div>
            <div className={styles.line}>
              <img src={icon2} alt='' />
              <p className={styles.lineInfo}>
                Ветер: <span>{windSpeed}м/с</span>
              </p>
            </div>
            <div className={styles.line}>
              <img src={icon3} alt='' />
              <p className={styles.lineInfo}>
                Давление: <span>{pressure}гПа</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

CityInfo.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired, // Название города
    temperature: PropTypes.number.isRequired, // Температура
    weather: PropTypes.string.isRequired, // Тип погоды (дождь, снег и т.д.)
    feelsLike: PropTypes.number.isRequired, // Ощущается как
    humidity: PropTypes.number.isRequired, // Влажность (%)
    windSpeed: PropTypes.number.isRequired, // Скорость ветра (м/с)
    pressure: PropTypes.number.isRequired // Давление (гПа)
  }).isRequired
}

export default CityInfo
