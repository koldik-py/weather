import './Home.module.sass'

const Home = props => {
  const data = [
    {
      cityName: 'Москва',
      country: 'Россия',
      date: new Date().toLocaleDateString(), // Текущая дата
      temperature: '0°C',
      weather: 'Солнечно'
    },
    {
      cityName: 'Нью-Йорк',
      country: 'США',
      date: new Date().toLocaleDateString(), // Текущая дата
      temperature: '5°C',
      weather: 'Облачно'
    },
    {
      cityName: 'Токио',
      country: 'Япония',
      date: new Date().toLocaleDateString(), // Текущая дата
      temperature: '10°C',
      weather: 'Дождливо'
    }
  ]
  return (
    <header className='home'>
      <div className='container'>
        <div className='home__container'>
          <div className='home__search'></div>
          <div className='home__content'></div>
        </div>
      </div>
    </header>
  )
}

export default Home
