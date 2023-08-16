import { Link } from 'react-router-dom'
import continentsData from '../../data/continents'

function Nav() {
  const continents = Object.keys(continentsData)
  // console.log(continents)
  return (
    <div>
      <h2>Nav</h2>
      <ul>
        {continents.map((continent, index) => {
          return (
            <li key={index}>
              <Link to={`/continents/${continent}`}>{continent}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Nav
