import { use, useState } from "react"

const Button = ({ handleClicks, text }) => (
  <button onClick={handleClicks}>{text}</button>
)

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>
      {text}
    </td>
    <td>
      {value}
    </td>
  </tr>
)

const Statistics = ({ good, neutral, bad }) => {
  const total = () => {
    return good + neutral + bad
  }

  const average = () => {

    if (total() === 0) return 0

    return (good - bad) / total()
  }

  const positive = () => {
    if (total() === 0) {
      return 0
    }
    return (good * 100) / total()
  }

  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <p>No Feedback given</p>

    )
  }

  return (
    <table>
      <tbody>
        <StatisticLine text='Good' value={good} />
        <StatisticLine text='Neutral' value={neutral} />
        <StatisticLine text='Bad' value={bad} />
        <StatisticLine text='All' value={total()} />
        <StatisticLine text='Average' value={average()} />
        <StatisticLine text='Positive' value={positive()} />
      </tbody>
    </table>
  )
}

function App() {

  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }


  return (
    <>
      <h1>Give feedback</h1>

      <Button handleClicks={handleGood} text="good" />
      <Button handleClicks={handleNeutral} text="neutral" />
      <Button handleClicks={handleBad} text="bad" />

      <h1>Statistics</h1>

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </>
  )
}

export default App
