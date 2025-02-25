import CityDetails from './pages/CityDetails'
import Home from './pages/Home'

function App() {
  const count = 0

  return (
    <header className='App'>
      <div className='container'>{count == 0 ? <Home /> : <CityDetails />}</div>
    </header>
  )
}

export default App
