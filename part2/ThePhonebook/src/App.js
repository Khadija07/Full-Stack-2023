import { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './services/person'
import Content from './component/content'


const Filter = (props) => {
  return(
    <div>
      filter shown with<input onChange={props.handle}/>

    </div>
  )
  
}

const PersonForm = (props) => {
  return(
    <div>
      name: <input value={props.name} onChange={props.changeName}/> number: <input value={props.number} onChange={props.changeNumber}/>
      
    </div>
    
  )
}


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [numbers, setNumbers] = useState('')
  const[showName, setShowName] = useState('')

  const hook = () => {
    console.log('effect')
    personService
      .getAll()
      .then(initialData => {
        // console.log('promise fulfilled')
        setPersons(initialData)
      })
  }
  
  useEffect(hook, [])

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number : numbers,
      // id: persons.length + 1
    }
    //console.log("id",id)
    if (persons.find((x) => x.name === newName)){
      alert(`${newName} is already added to phonebook`)

    }
    else {
      personService
      .create(nameObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
      })
      
      // setNumbers(numbers.concat(nameObject))
    }
    setNewName('')
    setNumbers('')
  }

  // const handleDelete = (id)=> {
  //   console.log(id)
  //   personService
  //   .deletePerson(id)
  //   .then(() => {
  //     setPersons(persons.map(n => n.id !== id))
  //   })

  // }

  
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNumbers(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setShowName(event.target.value)
  }
  const filterName = (person) => person.name.toLowerCase().includes(showName.toLowerCase())
  //console.log(persons.filter(filterName))



  return (
    <div>
      <h2>Phonebook</h2>
     
      <Filter handle = {handleFilterChange} />
      <div>
        <h3>add a new</h3>
      </div>
     
      <form onSubmit={addName}>
        <PersonForm name = {newName} number = {numbers} changeName = {handleNameChange} changeNumber = {handleNumberChange} />
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h3>Numbers</h3>
      <Content person = {persons} set = {setPersons} filter = {filterName}/>
      {/* <Persons person = {persons} filter = {filterName} nameDelete = {<button onClick={() => handleDelete({persons})}>delete</button>} /> */}
    </div>

  )
}

export default App