import Nav from './Nav.tsx'
import Home from './Home.tsx'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="title">
        <img
          src="/images/color_earth.gif"
          alt="A coloured globe of the earth spinning around on its axis"
        />
        <h1>Navigating the worldwide routes</h1>
      </div>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className="main">
        <Nav />
        <Outlet />
      </div>
    </>
  )
}

export default App
