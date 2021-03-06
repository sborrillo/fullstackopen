import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Prueba de comentario',
  'Otra prueba de comentario'
]
const Button = ({ text,handleClick }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}
const integerAleatorio = (min, max) => {
  return (
    Math.floor(Math.random() * (max - min)) + min
  )
}


const App = (props) => {
  const [selected, setSelected] = useState(0)
  const nuevoItem = () => setSelected(integerAleatorio(0,anecdotes.length))

  const inicioZeros = Array(anecdotes.length).fill(0)
  const [votos, setVotos] = useState(inicioZeros)
  const temporalVotos = [ ...votos]
  temporalVotos[selected] +=1 
  const nuevoVoto = () => setVotos(temporalVotos)
  
  const max = Math.max(...votos)
  const maxAnecdote = votos.findIndex(a => a == max)
  

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Has {votos[selected]} votes</p>
      
      <Button handleClick={nuevoVoto}
        text='Vote'
      />
      <Button handleClick={nuevoItem} 
        text='Next anecdote'
      />
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[maxAnecdote]}</p>
      <p>Has {votos[maxAnecdote]} votes</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App anecdotes={anecdotes}/>
  </React.StrictMode>
);