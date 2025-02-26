import { createSlice } from '@reduxjs/toolkit'

// Читаем избранное из localStorage
const loadFavorites = () => {
  const stored = localStorage.getItem('favorites')
  return stored ? JSON.parse(stored) : []
}

// Сохраняем избранное в localStorage
const saveFavorites = favorites => {
  localStorage.setItem('favorites', JSON.stringify(favorites))
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    cities: loadFavorites()
  },
  reducers: {
    addFavorite: (state, action) => {
      if (!state.cities.includes(action.payload)) {
        state.cities.push(action.payload)
        saveFavorites(state.cities)
      }
    },
    removeFavorite: (state, action) => {
      state.cities = state.cities.filter(city => city !== action.payload)
      saveFavorites(state.cities)
    }
  }
})

export const { addFavorite, removeFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer
