import { useState } from 'react'
const Statistics = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return(
    <div>
    <p>good {props.good}</p>
    <p>neutral {props.good}</p>
    <p>bad {props.bad}</p>
    <p>all {props.total}</p>
    <p>average {props.average}</p>
    <p>positive {props.positive}%</p>

  </div>
  )
  
}


const App = () => {
  // save clicks of each button to its own state

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0) 
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    const avgG = updatedGood*1
    const avgB = bad*(-1)
    const avg = avgG + avgB
    setGood(updatedGood)
    setTotal(updatedGood+neutral+bad)
    setAverage(avg)
    setPositive(updatedGood*100)
    
  }
  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    const avgG = good * 1
    const avgB = bad * (-1)
    const avg = avgG + avgB
    setNeutral(updatedNeutral)
    setTotal(updatedNeutral+good+bad)
    setAverage(avg)

  }
  const handleBadClick = () => {
    const updatedBad = bad + 1
    const avgB = updatedBad*(-1)
    const avgG = good*1
    const avg = avgG + avgB
    setBad(updatedBad)
    setTotal(updatedBad+good+neutral)
    setAverage(avg)
  } 

  return (
    <div>
      <h1>give feedback</h1>

      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <h1>statistics</h1>
      <table>
        <tbody>
          <tr>
            <td>good</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>all</td>
            <td>{total}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{average/total}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{positive/total} %</td>
          </tr>
        </tbody>
      </table>

      
    </div>
  )
}
                                                                                           
export default App
