import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import Home from './components/Home'
import Continent from './components/Continent'
import App from './components/App'
import Country from './components/Country'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/continents/:name" element={<Continent />} />
      <Route path="/continents/:name/:code" element={<Country />} />
    </Route>
  )
)

export default router
