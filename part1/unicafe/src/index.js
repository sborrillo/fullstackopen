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
const Statistic = ({ text, value }) => {
  if(text==='Positives'){
    return (
      <p>{text} {value} %</p>
    )
  }else{
    return (
      <p>{text} {value}</p>
    )
  }  
}
const Statistics = ({ good,neutral,bad,suma,promedio,positivos }) => {
  return (
    <div>
      <Statistic text={'Good'} value={good} />
      <Statistic text={'Neutral'} value={neutral} />
      <Statistic text={'Bad'} value={bad} />
      <Statistic text={'All'} value={suma} />
      <Statistic text={'Average'} value={suma>0? promedio :0} />
      <Statistic text={'Positives'} value={suma>0? positivos :0} rrrssss/>
    </div>
  )
}
const Decidir = ({ good, neutral, bad, promedio, positivos, suma }) => {
  if (suma===0) {
    return (    
      <p>No feedback given</p>
    )
    }else{
      return (
        <Statistics good={good} neutral={neutral} bad={bad} suma={suma} promedio={promedio} positivos={positivos} />
      )
    }  
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const sumaGood = () => setGood(good + 1)
  const sumaNeutral = () => setNeutral(neutral + 1)
  const sumaBad = () => setBad(bad + 1)
  const suma = good + neutral + bad
  const promedio = (good - bad)/suma
  const positivos = (good*100)/suma;
  
  
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
      <h1>Statistics</h1>
      <Decidir good={good} neutral={neutral} bad={bad} suma={suma} promedio={promedio} positivos={positivos} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));