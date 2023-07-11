const Header = (props) => {
  console.log(props)

  return(
    <div>
    <h1>{props.course}</h1>

    </div>

  )
  

}
const Part1 = (props) => {
  console.log(props)
  return(
    <div> 
    <p>
    {props.part} {props.exercise}
    </p>

    </div>


  )
}
const Part2 = (props) => {
  return(
    <div> 
    <p>
    {props.part} {props.exercise}
    </p>

    </div>


  )
}
const Part3 = (props) => {
  return(
    <div> 
    <p>
    {props.part} {props.exercise}
    </p>

    </div>


  )
}

const Content = () => {

  return(
    <div> 
    <Part1/>
    <Part2/>
    <Part3/>

    </div>

  )

}

const Total = (props) => {

  return(
    <div>
    <p>Number of exercises {props.exercise1 + props.exercise2 + props.exercise3}</p>

    </div>

  )
}



const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  

  return (
    <div>
      <Header course = {course}/>
      <Part1 part= {parts[0].name} exercise= {parts[0].exercises}/>
      <Part2 part= {parts[1].name} exercise= {parts[1].exercises}/>
      <Part3 part= {parts[2].name} exercise= {parts[2].exercises}/>
      <Total exercise1 = {parts[0].exercises} exercise2 = {parts[1].exercises} exercise3 = {parts[2].exercises}/>
      
    </div>
  )
}

export default App