import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNavbar from './components/myNavbar'
import FetchInfo from './components/FetchInfo'

function App() {
  return (
    <>
      <MyNavbar />
      <FetchInfo movie='Star Wars' />
      <FetchInfo movie= 'Inception' />
    </>
  )
}

export default App
