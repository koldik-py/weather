import CityDetails from './pages/CityDetails'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const count = 0

  return (
    <Router>
      <header className='App'>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/city/:cityName' element={<CityDetails />} />
          </Routes>
        </div>
      </header>
    </Router>
  )
}

export default App
