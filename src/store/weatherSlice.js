import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'

// Асинхронный экшен для загрузки погоды
export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (cityName, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${BASE_URL}?q=${cityName}&units=metric&appid=${API_KEY}&lang=ru`
      )

      if (!response.ok) throw new Error('Ошибка при загрузке погоды')

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
      return rejectWithValue(error.message)
    }
  }
)

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    cities: {}, // Состояние теперь хранит данные для нескольких городов
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchWeather.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false
        const { name } = action.payload
        state.cities[name] = action.payload // Добавляем или обновляем данные для города
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})
export default weatherSlice.reducer
