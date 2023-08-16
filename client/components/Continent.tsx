import { useParams } from 'react-router-dom'
import data from '../../data/continents'
import { Link } from 'react-router-dom'

export default function Continent() {
  const params = useParams()
  const continent = params.name

  const continentData = data[continent as keyof typeof data]

  return (
    <div>
      <img src={`../../images/${continentData.image}`} alt="" />
      <ul>
        {continentData.countries.map((country, index) => {
          // console.log(continentData)
          return (
            <li key={index}>
              <Link to={`/continents/${continent}/${country.code}`}>
                {country.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
