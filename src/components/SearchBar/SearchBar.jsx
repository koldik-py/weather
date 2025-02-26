import { useState } from 'react'
import styles from './SearchBar.module.sass'
import { useNavigate } from 'react-router-dom'
import { fetchWeather } from '../../api/weatherApi'

import searchIcon from '../../assets/search.svg'

const MAX_LENGTH = 40

const SearchBar = () => {
  const [query, setQuery] = useState('')
  const [isLimitExceeded, setIsLimitExceeded] = useState(false)
  const navigate = useNavigate()

  const handleInputChange = e => {
    const value = e.target.value

    if (value.length > MAX_LENGTH) {
      setIsLimitExceeded(true)
      return
    } else {
      setIsLimitExceeded(false)
    }

    setQuery(value)
  }

  const handleSearch = async () => {
    if (query.trim()) {
      try {
        const result = await fetchWeather(query)

        if (result.name) {
          navigate(`/city/${query}`)
        } else {
          setIsLimitExceeded(true)
        }
      } catch (error) {
        console.error('Ошибка при поиске города:', error)
        setIsLimitExceeded(true)
      }
    }
  }

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }
  return (
    <div className={styles.main}>
      <div
        className={`${styles.inputBox} ${isLimitExceeded ? styles.error : ''}`}
      >
        <input
          type='text'
          placeholder='Введите город...'
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>

      <button className={styles.btn} onClick={handleSearch}>
        <img src={searchIcon} alt='Поиск' />
      </button>
    </div>
  )
}

export default SearchBar
