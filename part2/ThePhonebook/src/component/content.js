import { useState} from 'react'
import axios from 'axios'

const Content = (props) => {
    const[count, setCount] = useState(0)

    const NameDelete = ({person}) => {
        console.log("deleted id", person.id)
        if(window.confirm(`Delete ${person.name} ?`)){
            axios.get('http://localhost:3001/persons')
        axios
        .delete(`http://localhost:3001/persons/${person.id}`)
        .then(() => {
            console.log("deleted")
            props.set(props.person.filter(n => n.id !== person.id))
            setCount(1)

          })
          .catch(error => {
            alert(
              `the note '${person.name}' was already deleted from server`
            )
            props.set(props.person.filter(n => n.id !== person.id))
          })

        }
        
    }
    return(
        <div>
          {props.person.filter(props.filter).map(person => <div key={person.id}>{person.name} {person.number} {<button onClick={() => NameDelete({person})}>delete</button>}</div>)}
          
          
        </div>
      )
  

}
export default Content