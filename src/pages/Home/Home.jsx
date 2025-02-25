import CityCard from '../../components/CityCard'
import SearchBar from '../../components/SearchBar'
import styles from './Home.module.sass'

const Home = props => {
  const data = [
    {
      cityName: 'Москва',
      country: 'Россия',
      date: new Date().toLocaleDateString(), // Текущая дата
      temperature: '0',
      weather: 'Солнечно'
    },
    {
      cityName: 'Нью-Йорк',
      country: 'США',
      date: new Date().toLocaleDateString(), // Текущая дата
      temperature: '5',
      weather: 'Облачно'
    },
    {
      cityName: 'Токио',
      country: 'Япония',
      date: new Date().toLocaleDateString(), // Текущая дата
      temperature: '10',
      weather: 'Дождливо'
    }
  ]

  const dataElems = data.map((info, index) => (
    <CityCard data={info} key={info.cityName} />
  ))
  return (
    <>
      <div className={styles.home__container}>
        <div className={styles.home__search}>
          <SearchBar onSearch={city => console.log('Ищем:', city)} />
        </div>
        <div className={styles.home__content}>
          {dataElems} {dataElems}
        </div>
      </div>
    </>
  )
}

export default Home
