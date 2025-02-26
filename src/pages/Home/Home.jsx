import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CityCard from '../../components/CityCard'
import SearchBar from '../../components/SearchBar'
import styles from './Home.module.sass'

import { useDispatch } from 'react-redux'
import { addFavorite } from '../../store/favoritesSlice'

const DEFAULT_CITIES = [
  'Москва',
  'Париж',
  'Нью-Йорк',
  'Токио',
  'Лондон',
  'Сидней'
]

const Home = props => {
  const favorites = useSelector(state => state.favorites.cities)
  const [cities, setCities] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    const storedCities = localStorage.getItem('favorites')

    if (storedCities) {
      setCities(JSON.parse(storedCities))
    } else {
      setCities(DEFAULT_CITIES)
      localStorage.setItem('favorites', JSON.stringify(DEFAULT_CITIES))
      DEFAULT_CITIES.forEach(city => {
        dispatch(addFavorite(city)) // Добавляем города по умолчанию в Redux
      })
    }
  }, [favorites])

  return (
    <>
      <div className={styles.home__container}>
        <div className={styles.home__search}>
          <SearchBar onSearch={city => console.log('Ищем:', city)} />
        </div>
        <div className={styles.home__content}>
          {cities.map(city => (
            <CityCard key={city} cityName={city} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
