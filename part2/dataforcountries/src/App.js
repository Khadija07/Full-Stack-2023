import { useState, useEffect } from 'react'
import axios from 'axios'

const Filter = (props) => {
  if(props.country.filter(props.filter).length > 10){
    return(
      <div>
        please specify more
      </div>
    )
  }
  if(props.country.filter(props.filter).length == 1){

    return(
      <div>
        <h1>{props.country.filter(props.filter).map(person => <div >{person.name.common}</div>)}</h1>
        capital {props.country.filter(props.filter).map(person => <div >{person.capital}</div>)}
        area {props.country.filter(props.filter).map(person => <div >{person.area}</div>)}
        languages:
        {/* <ul>
          {Object.values(props.country.filter(props.filter).map(person => <div >{person.languages}</div>)).map((language,index) => <li key={index}>{language}</li>)}
        {props.country.filter(props.filter).map(person => <div >{person.languages}</div>).map((language,index) => <li key={index}>{language}</li>)}

        </ul> */}
        flag
        <img 
        src= {props.country.filter(props.filter).map(person => <div >{person.flags.png}</div>)}  />
        

      </div>
    )

  }
  else{
    return(
      <div>  
        {props.country.filter(props.filter).map(person => <div >{person.name.common}</div>)}
  
      </div>
    )
  }

  
}


const App = () => {

  const [value, setValue] = useState('')
  const [rates, setRates] = useState([])
  const [countryname, setCountryname] = useState('')

  useEffect(() => {
    console.log('effect run, currency is now', countryname)

    // skip if currency is not defined
    if (countryname) {
      console.log('fetching exchange rates...')
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
        .then(response => {
          setRates(response.data)
          console.log(response.data)
        })

    }
  }, [countryname])
  

  const onSearch = (event) => {
    setCountryname(event.target.value)
    console.log("countryname",event.target.value)
  }
 
  const filterName = (country) => country.name.common.toLowerCase().includes(countryname.toLowerCase())
  console.log("filter",rates.filter(filterName))
  

  return (
    <div>
      find countries <input onChange={onSearch}/>
      <div>
      <Filter country = {rates} filter = {filterName}/>

      </div>
  
      
      

     
      
    </div>
  )
}

export default App
