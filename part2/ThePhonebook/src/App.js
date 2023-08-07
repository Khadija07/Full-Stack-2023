import { useState } from 'react'

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

const Persons = (props) => {
  return(
    <div>
      {props.person.filter(props.filter).map(person => <div key={person.id}>{person.name} {person.number}</div>)}

    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [numbers, setNumbers] = useState('')
  const[showName, setShowName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number : numbers,
      id: persons.length + 1
    }
    //console.log("id",id)
    if (persons.find((x) => x.name === newName)){
      alert(`${newName} is already added to phonebook`)

    }
    else {
      setPersons(persons.concat(nameObject))
      // setNumbers(numbers.concat(nameObject))
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
     
      <Filter handle = {handleFilterChange} />
      <div>
        <h3>add a new</h3>
      </div>
     
      <form onSubmit={addName}>
        <PersonForm name = {newName} number = {numbers} changeName = {handleNameChange} changeNumber = {handleNumberChange}/>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h3>Numbers</h3>
      <Persons person = {persons} filter = {filterName}/>   
    </div>

  )
}

export default App