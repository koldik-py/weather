import { useState } from 'react'
import styles from './SearchBar.module.sass'

const MAX_LENGTH = 40

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('')
  const [isLimitExceeded, setIsLimitExceeded] = useState(false)

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

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query)
      setQuery('')
      setIsLimitExceeded(false)
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
        />
      </div>

      <button className={styles.btn} onClick={handleSearch}>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
          <path d='M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z' />
        </svg>
      </button>
    </div>
  )
}

export default SearchBar
