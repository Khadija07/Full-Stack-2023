import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [totalG, setTotalG] = useState(0)
  const [totalN, setTotalN] = useState(0)
  const [totalB, setTotalB] = useState(0)
  const [totalAll, setTotalAll] = useState(0)
  const [average, setAverage] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotalG(updatedGood)
    setTotalAll(updatedGood + totalB + totalN)
    const total = updatedGood + totalB + totalN
    const avg = updatedGood*1 + totalB*-1 + totalN*0
    //console.log("good",total)
    setAverage(avg / total)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setTotalN(updatedNeutral)
    setTotalAll(updatedNeutral + totalB + totalG)
    const total = updatedNeutral + totalB + totalG
    const avg = updatedNeutral*0 + totalB*-1 + totalG*1
    //console.log('N', totalAll)
    setAverage(avg / total)
  }
  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setTotalB(updatedBad)
    setTotalAll(updatedBad + totalN + totalG)
    const total = updatedBad + totalN + totalG
    const avg = updatedBad*-1 + totalG*1 + totalN*0
    setAverage(avg / total)
    //console.log('badtotal',totalAll)
  }

  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

  const StatisticLine = ({text, value}) => {

    if (text == 'positive'){
      return(
        <div>
          {text} {value} %
        </div>
      )
    }
    
    return(
      <div>
        <p>{text} {value}</p>
      </div>
    )


  }


  const Statistics = (props) => {
    if(props.all == 0) {
      return(
        <div>
          No feedback given
        </div>
      )
    }

    const positive = (props.positive/props.total)*100

    return(
      <div>
        <StatisticLine text="good" value ={props.good} />
        <StatisticLine text="neutral" value ={props.neutral} />
        <StatisticLine text="bad" value ={props.bad} />
        <StatisticLine text="all" value ={props.all} />
        <StatisticLine text="average" value ={props.average} />
        <StatisticLine text="positive" value ={positive} />


      </div>


    )

  }


  return (
    <div>

      <h1>give feedback</h1>

      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />

      

      <h1>statistics</h1>
      <Statistics good = {totalG} neutral = {totalN} bad = {totalB} all = {totalAll} average = {average} positive = {good} total = {totalAll}/>
      
    </div>
  )
}
export default App;
