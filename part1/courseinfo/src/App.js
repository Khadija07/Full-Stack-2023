const Header = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        The name of the course is {props.course}
      </p>
    </div>
  )
}
const Content = (props) => {

  console.log(props)
  return (
    <div>
      <p>
        It has {props.parts[0].name} part and number of exercises {props.parts[0].exercises}
      </p>
      <p> 
        It has {props.parts[1].name} part and number of exercises {props.parts[1].exercises}
      </p>
      <p>
        It has {props.parts[2].name} part and number of exercises {props.parts[2].exercises}
      </p>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        The total number of exercises is {props.parts}
      </p>
    </div>
  )
}
const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        It has {props.part} part and number of exercises {props.exercises}
      </p>
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
  console.log('App')

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts[0].exercises + parts[1].exercises+ parts[2].exercises} />
      
    </div>
  )
}

export default App