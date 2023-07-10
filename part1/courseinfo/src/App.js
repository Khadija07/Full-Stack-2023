const Header = (props) => {

  return(
    <div>
    <h1>{props.course}</h1>

    </div>

  )
  

}
const Part1 = (props) => {
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  console.log('constants')

  return (
    <div>
      <Header course = {course}/>
      <Part1 part= {part1} exercise= {exercises1}/>
      <Part2 part= {part2} exercise= {exercises2}/>
      <Part3 part= {part3} exercise= {exercises3}/>
      <Total exercise1 = {exercises1} exercise2 = {exercises2} exercise3 = {exercises3}/>
      
    </div>
  )
}

export default App