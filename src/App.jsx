import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNavbar from './components/myNavbar'
import HomeContainer from './components/HomeContainer'
import MyFooter from './components/MyFooter'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TVShows from './components/TVShows'
import MovieDetails from './components/MovieDetails'

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<HomeContainer title="Homepage" />} />

          <Route path="/TV-Shows" element={<TVShows title="TV Shows" />} />
          <Route path="/details:elementId" element={<MovieDetails />} />
        </Routes>

        <MyFooter />
      </BrowserRouter>
    </>
  )
}

export default App
