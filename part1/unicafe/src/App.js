import { useState } from 'react'

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>
        <p>{props.name}</p>
      </h1>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0) 


  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    
  }
  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
  }
  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
  } 


  return (
    <div>
      <Header name='give feedback'/>

      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <Header name='statistics'/>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p> 
    </div>
  )
}

export default App