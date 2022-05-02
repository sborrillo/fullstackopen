import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => (
  <h1>{props.course}</h1>
)
const Part = (props) => (
  <p>{props.part} {props.exercise}</p>
)
const Total = (props) => (
  <p>Number of exercises {props.num1 + props.num2 + props.num3}</p>
)
const Content = (props) => {
  return (
    <div>
     <Part part={props.part1} exercise={props.exercise1} />
     <Part part={props.part2} exercise={props.exercise2} />
     <Part part={props.part3} exercise={props.exercise3} />
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of component',
    exercises: 14
  }
  return (
    <div>
      <Header course={course} />
      <Content 
        part1={part1.name} exercise1={part1.exercises}
        part2={part2.name} exercise2={part2.exercises} 
        part3={part3.name} exercise3={part3.exercises} />
      <Total num1={part1.exercises} num2={part2.exercises} num3={part3.exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

/*import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/
