import axios from 'axios'
import { useState, useEffect } from 'react'


const Filter = ({countryName}) => {
    const[countryData, setCountryData] = useState([])
    const[showtimer, setShowtimer] = useState(0)
    const[language, setLanguage] = useState('')
    const[flag, setFlag] = useState('')
    const[name, setName] = useState('')


    const CountryShow = ({country}) => {
        let name = country.name.common
        setName(name)
        console.log("show button clicked")
        console.log(name)
        axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${name}`)
        .then(response => {
          setCountryData(response.data)
          setLanguage(response.data.languages)
          setFlag(response.data.flags)
          console.log("countryData",countryData)
        })
      
        setShowtimer(1)

    }
    // useEffect(() => {
    //   if(showtimer){
        

    //   }
    // })
    if(showtimer === 1 && countryName.length < 10 ){
      
      console.log("timer",showtimer)
        return(
            <div>
                <p>area {countryData.area}</p>
                <p>capital {countryData.capital}</p>
                <b>languages:</b>
                <ul>
                  {/* {Object.values(countryData.languages).map((lang, index) => <li key={index}>{lang}</li>)} */} 
                  {Object.values(language).map((lang, index) => <li key={index}>{lang}</li>)}
                </ul>
                
                <img 
                src = {flag.png} />
                {countryName.filter(c =>c.name.common !== name).map((country,index) => <div key={index}>{country.name.common} <button onClick={() => { CountryShow({country})} }>show</button></div>)}
                
    

                
            </div>
        )
        
    }
    if(countryName.length == 0){
      return null
    }
    
    else if(countryName.length > 10){
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
    else if(countryName.length >= 1 && countryName.length <= 10 ){
    
      console.log("length",countryName.length)
      return(
        <div>  
          {countryName.map((country,index) => <div key={index}>{country.name.common} <button onClick={() => { CountryShow({country})} }>show</button></div>)}
    
        </div>
      )
    }
  
    
  }
  export default Filter