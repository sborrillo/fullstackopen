import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const sumaGood = () => setGood(good + 1)
  const sumaNeutral = () => setNeutral(neutral + 1)
  const sumaBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={sumaGood}
        text='Good'
      />
      <Button handleClick={sumaNeutral}
        text='Neutral'
      />
      <Button handleClick={sumaBad}
        text='Bad'
      />
      <h2>Statistics</h2>      
      <h4>Good {good}</h4>
      <h4>Neutral {neutral}</h4>
      <h4>Bad {bad}</h4>
      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));