import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './CityCard.module.sass'

import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather } from '../../api/weatherApi'
import { removeFavorite } from '../../store/favoritesSlice'
import getCustomWeatherIcon from '../../utils/icon.js'
import sun from '../../assets/Солнце.svg'

import heart from '../../assets/heart.svg'
import del from '../../assets/exit.svg'

const CityCard = ({ cityName }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [city, setCity] = useState(null)

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const date = new Date().toLocaleDateString('ru-RU', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  useEffect(() => {
    const fetchCityData = async () => {
      try {
        const data = await fetchWeather(cityName)

        if (data) {
          setCity({ ...data })
          setLoading(false)
        } else {
          setLoading(false)
        }
      } catch (error) {
        setError(true)
      }
    }

    fetchCityData()
  }, [cityName])

  const handleDelete = () => dispatch(removeFavorite(cityName))

  const goCard = () => navigate(`/city/${cityName}`)

  if (loading) {
    return (
      <article className={styles.card}>
        <h1 className={styles.title}>Загрузка...</h1>
      </article>
    )
  }

  if (error) {
    return (
      <article className={styles.card}>
        <h1 className={styles.title}>Ошибка: {error}</h1>
      </article>
    )
  }
  // if (!city) {
  //   return null
  // }
  return (
    <article className={styles.card}>
      <div className={styles.actions}>
        <img className={styles.love} src={heart} alt='Избранное' />
        <img
          className={styles.del}
          src={del}
          alt='Удалить'
          onClick={handleDelete}
        />
      </div>
      <div className={styles.content} onClick={goCard}>
        <div className={styles.details}>
          <img src={getCustomWeatherIcon(city.iconName)} alt='Солнечно' />
          <div className={styles.text}>
            <h1 className={styles.title}>
              {city.name ? city.name : ''}
              <span>, {city.country}</span>
            </h1>
            <h2 className={styles.date}>{date}</h2>
          </div>
        </div>
        <div className={styles.temp}>
          <p>
            {city.temperature} <sup>°C</sup>
          </p>
        </div>

        <p className={styles.weather}>{city.weather}</p>
      </div>
    </article>
  )
}

CityCard.propTypes = {
  cityName: PropTypes.string.isRequired
}

export default React.memo(CityCard)
