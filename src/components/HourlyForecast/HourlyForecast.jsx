import React from 'react'
import styles from './HourlyForecast.module.sass'

import sun from '../../assets/Солнце.svg'

const HourlyForecast = ({ data }) => {
  const nameDay = ['Утро', 'День', 'Вечер', 'Ночь']
  const { temperature, weather } = data
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Текущая погода</h1>
      <div className={styles.main}>
        {nameDay.map(day => (
          <Elem
            nameDay={day}
            key={day}
            temperature={temperature}
            weather={weather}
          />
        ))}
      </div>
    </section>
  )
}

const Elem = ({ nameDay, temperature, weather }) => {
  return (
    <article className={styles.elem}>
      <h1 className={styles.titleCard}>{nameDay}</h1>
      <img src={sun} alt='' />
      <div className={styles.tempValue}>
        <p>
          {temperature} <sup>°C</sup>
        </p>
      </div>
      <p>{weather}</p>
    </article>
  )
}

export default HourlyForecast
