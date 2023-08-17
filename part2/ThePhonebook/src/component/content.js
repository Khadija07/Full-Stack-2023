import { useState} from 'react'
import axios from 'axios'
import Notification from './notification'

const Content = (props) => {

  const[errorMessage, setErrorMessage] = useState('')
    const NameDelete = ({person}) => {
        console.log("deleted id", person.id)
        if(window.confirm(`Delete ${person.name} ?`)){
            axios.get('http://localhost:3001/persons')
        axios
        .delete(`http://localhost:3001/persons/${person.id}`)
        .then(() => {
            console.log("deleted")
            props.set(props.person.filter(n => n.id !== person.id))

          })
          .catch(error => {
            setErrorMessage(`the note '${person.name}' was already deleted from server`)
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
           
            props.set(props.person.filter(n => n.id !== person.id))
          })

        }
        
    }
    return(
        <div>
          {props.person.filter(props.filter).map(person => <div key={person.id}>{person.name} {person.number} {<button onClick={() => NameDelete({person})}>delete</button>}</div>)}
          <Notification message = {errorMessage} />

          
          
        </div>
      )
  

}
export default Content