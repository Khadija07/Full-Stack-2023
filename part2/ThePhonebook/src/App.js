import { useState, useEffect } from 'react'
import personService from './services/person'
import Content from './component/content'
import Notification from './component/notification'
import './index.css'


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
  const[message, setMessage] = useState('Provide input')

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
    }
    //console.log("id",id)
    if(persons.find(x => x.name == newName)){

      const person = persons.find(x => x.name == newName) //data of the person in the server same as newName
      const id = person.id
      console.log("name",person)
      console.log("id",id)
      const changedNumber = {...person, number : numbers} //exact copy of the person but with only new number
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        personService
        .update(id, changedNumber)
        .then(returnedPerson => {
          setPersons(persons.map((person) => person.name != newName ? person : returnedPerson))
          setMessage(`The number for ${newName} has been updated.`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        }) 
        .catch(error => {
          alert(
            `the note '${person.name}' was already deleted from server`
          )
          setPersons(persons.filter(n => n.id !== id))
        })
      }
    }
    
    else {
      personService
      .create(nameObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setMessage(`Added ${newName}`)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      }
      )
      
    }
    setNewName('')
    setNumbers('')
  }
 
  
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
      <br />
      <Notification message={message}/>
     
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