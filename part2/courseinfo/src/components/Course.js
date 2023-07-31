
const Course = ({ course }) =>{
    return(
      <div>
        <Header course = {course.name}/>
        <Content content = {course.parts}/>
        <Total total = {course.parts}/>
  
       
        
  
      </div>
  
    )
    
  }
  const Header = (props) => {
    return(
      <h1>{props.course}</h1>
  
    )
  }
  const Content = (props) => {
    console.log(props)
  
    return(
      <div> 
        {props.content.map(c => <p key={c.id}>{c.name} {c.exercises}</p>)}
      </div>
  
    )
  
  }
  const Total = (props) => {
    console.log("total",props)
    return(
      <div>
  
        <p><b>total of {props.total.reduce((sum, exercise) => sum + exercise.exercises,
        0)} exercises</b></p>
      </div>
    )
  }

export default Course