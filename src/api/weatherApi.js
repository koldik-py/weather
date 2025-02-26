const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'

export const fetchWeather = async cityName => {
  try {
    const response = await fetch(
      `${BASE_URL}?q=${cityName}&units=metric&appid=${API_KEY}&lang=ru`
    )

    if (!response.ok) {
      throw new Error('Ошибка при получении данных')
    }

    const data = await response.json()

    return {
      name: data.name,
      country: data.sys.country,
      temperature: Math.round(data.main.temp),
      weather: data.weather[0].description,
      feelsLike: Math.round(data.main.feels_like),
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      pressure: data.main.pressure,
      iconName: data.weather[0].icon
    }
  } catch (error) {
    console.error('Ошибка запроса:', error)
    return null
  }
}
