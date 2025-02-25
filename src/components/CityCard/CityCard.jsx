import React from 'react'
import PropTypes from 'prop-types'
import styles from './CityCard.module.sass'

import heart from '../../assets/heart.svg'
import del from '../../assets/exit.svg'
import sun from '../../assets/Солнце.svg'

const CityCard = ({ data }) => {
  const { cityName, country, date, temperature, weather } = data
  return (
    <article className={styles.card}>
      <div className={styles.actions}>
        <img className={styles.love} src={heart} alt='Избранное' />
        <img className={styles.del} src={del} alt='Удалить' />
      </div>
      <div className={styles.details}>
        <img src={sun} alt='Солнечно' />
        <div className={styles.text}>
          <h1 className={styles.title}>
            {cityName}
            <span>, {country}</span>
          </h1>
          <h2 className={styles.date}>{date}</h2>
        </div>
      </div>
      <div className={styles.temp}>
        <p>
          {temperature} <sup>°C</sup>
        </p>
      </div>

      <p className={styles.weather}>{weather}</p>
    </article>
  )
}

CityCard.propTypes = {
  data: PropTypes.shape({
    cityName: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    weather: PropTypes.string.isRequired
  }).isRequired
}

export default CityCard
