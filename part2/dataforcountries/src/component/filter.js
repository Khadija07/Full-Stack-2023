import axios from 'axios'
import { useState, useEffect } from 'react'


const Filter = ({countryName}) => {
    const[countryData, setCountryData] = useState([])
    const[showtimer, setShowtimer] = useState(0)

    const CountryShow = ({country}) => {
        let name = country.name.common
        console.log("show button clicked")
        console.log(country.name.common)
        axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${name}`)
        .then(response => {
          setCountryData(response.data)
          console.log(response.data)
          console.log("countryData",countryData)
        })
        setShowtimer(1)

    }
    if(showtimer == 1){    
        console.log(countryData.languages)
        return(
            <div>
                <p>area {countryData.area}</p>
                <p>capital {countryData.capital}</p>
                <b>languages:</b>
                {/* <ul>
                   {countryData.map((language,index) => <li key={index}>{language}</li>)}
                </ul> */}

                <img 
                src = {countryData.flags} />

                
            </div>
        )
        
        
        
    }
    if(countryName.length > 10){
      return(
        <div>
          Too many matches, specify another filter
        </div>
      )
    }
    else if(countryName.length == 1){
      let country = countryName[0]
      console.log("country",country)
  
      return(
        <div>
          <h1>{countryName.map(person => <div >{person.name.common}</div>)}</h1>
          <p>capital {country.capital}</p>
         <p>area {country.area}</p>
          <b>languages:</b>
          <ul>
            {Object.values(country.languages).map((language,index) => <li key={index}>{language}</li>)}
  
          </ul>
          <img 
          src= {country.flags.png} alt = {country.flags.alt}
           />
          
  
        </div>
      )
  
    }
    else{
      return(
        <div>  
          {countryName.map((country,index) => <div key={index}>{country.name.common} <button onClick={() => CountryShow({country})}>show</button></div>)}
    
        </div>
      )
    }
  
    
  }
  export default Filter