import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './component/filter'


const App = () => {

  const [alldata, setAlldata] = useState([])
  const [countryname, setCountryname] = useState('')

  useEffect(() => {
    console.log('effect run, currency is now', countryname)

    // skip if country is not defined
    if (countryname) {
      console.log('fetching exchange rates...')
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
        .then(response => {
          setAlldata(response.data)
          console.log(response.data)
        })

    }
  }, [countryname])
  

  const onSearch = (event) => {
    setCountryname(event.target.value)
    console.log("countryname",event.target.value)
  }
 
  const filterName = (country) => country.name.common.toLowerCase().includes(countryname.toLowerCase())
  console.log("filter",alldata.filter(filterName))
  

  return (
    <div>
      find countries <input onChange={onSearch}/>
      <div>
      <Filter countryName = {alldata.filter(filterName)}/>

      </div>
      
    </div>
  )
}

export default App
