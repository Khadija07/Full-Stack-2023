const Header = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        The name of the course is {props.course.name}
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
        The total number of exercises is {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
      </p>
    </div>
  )
}



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course= {course}/>
      <Content parts={course.parts}/>
      <Total parts= {course.parts}/>
      
    </div>
  )
}

export default App