import { useParams, Link } from 'react-router-dom'
import data from '../../data/countries'

function Country() {
  const { code } = useParams()
  const { name } = useParams()
  const country = data.find((item) => item.code === code)
  // const continent =
  // console.log(name)
  // Find the country object based on the code

  if (!country) {
    return <h1>Country not found</h1>
  }
  // console.log(country)
  // console.log(country.name)

  const neighbours = country.neighbours.split(',')
  const neighbourCode = neighbours
    .map((el) => data.find((element) => element.code == el))
    .filter((neighbor) => neighbor !== undefined)
  console.log(country)

  const name1 = neighbourCode.map((el) => (
    <li key={el.code}>
      <Link to={`/continents/${name}/${el.code}`}>{el.name}</Link>
    </li>
  ))

  // console.log(neighbours)
  return (
    <div>
      <h1>
        {country.name} {country.flag}
      </h1>
      <p>
        <strong>Capital:</strong> {country.capital}
      </p>
      <p>
        <strong>Area: </strong> {country.areaSqKms} sq. km
      </p>
      <p>
        <strong>Population: </strong> {country.population}
      </p>
      <p>
        <strong>Currency: </strong> {country.currencyName} (
        {country.currencyCode})
      </p>
      <p>
        <strong>Neighbours: </strong>
        {name1 || 'None'}
      </p>
    </div>
  )
}

export default Country
