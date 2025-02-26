import { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import styles from './CityDetails.module.sass'
import CityInfo from '../../components/CityInfo'
import { fetchWeather } from '../../api/weatherApi'

import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { addFavorite } from '../../store/favoritesSlice'

const CityDetails = () => {
  const { cityName } = useParams()
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const prevCityNameRef = useRef()

  useEffect(() => {
    if (prevCityNameRef.current === cityName) {
      return
    }

    const loadWeather = async () => {
      try {
        setLoading(true)
        const data = await fetchWeather(cityName)
        setWeatherData(data)
      } catch (err) {
        setError('Ошибка при загрузке данных')
      } finally {
        setLoading(false)
      }
    }

    prevCityNameRef.current = cityName
    loadWeather()
  }, [cityName])

  const handleGoBack = () => {
    navigate(-1) // Возвращает на предыдущую страницу
  }
  const handleAddToFavorites = () => {
    // Добавление города в избранное
    dispatch(addFavorite(cityName))
    navigate(-1)
  }

  if (loading) return <p>Загрузка...</p>
  if (error) return <p>{error}</p>

  return (
    <div className={styles.container}>
      <CityInfo weatherData={weatherData} />
      <div className={styles.flex}>
        <button className={styles.btn} onClick={handleAddToFavorites}>
          Добавить в избранное
        </button>
        <button className={styles.btn} onClick={handleGoBack}>
          Вернуться
        </button>
      </div>
    </div>
  )
}

export default CityDetails
