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
        It has {props.part} part and it consists of {props.exercises} exercises.
        
      </p>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        The total number of exercises is {props.total}
      </p>
    </div>
  )
}




const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part={part1} exercises={exercises1}/>
      <Content part={part2} exercises={exercises2}/>
      <Content part={part3} exercises={exercises3}/>
      <Total total= {exercises1+exercises2+exercises3}/>

      
    </div>
  )
}

export default App