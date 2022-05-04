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
const Statistics = ({ good,neutral,bad,suma,promedio,positivos }) => {
  return (
    <div>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {suma}</p>
      <p>Average {suma>0? promedio :0}</p>
      <p>Positives {suma>0? positivos :0} %</p>
    </div>
  )
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const sumaGood = () => setGood(good + 1)
  const sumaNeutral = () => setNeutral(neutral + 1)
  const sumaBad = () => setBad(bad + 1)
  let suma = good + neutral + bad
  let promedio = (good - bad)/suma
  let positivos = (good*100)/suma;
  
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
      <Statistics good={good} neutral={neutral} bad={bad} suma={suma} promedio={promedio} positivos={positivos} />

      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));