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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of component'
  const exercises3 = 13

  return (
    <div>
      <Header course={course} />
      <Content 
        part1={part1} exercise1={exercises1}
        part2={part2} exercise2={exercises2} 
        part3={part3} exercise3={exercises3} />
      <Total num1={exercises1} num2={exercises2} num3={exercises3} />
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
