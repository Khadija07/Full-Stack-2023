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
const Content = () => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  console.log('Renders Part')
  return (
    <div>
      <Part part={part1} exercises={exercises1}/>
      <Part part={part2} exercises={exercises2}/>
      <Part part={part3} exercises={exercises3}/>
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
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  console.log('App')

  return (
    <div>
      <Header course={course} />
      <Content/>
      <Total total= {exercises1+exercises2+exercises3}/>
     

      
    </div>
  )
}

export default App