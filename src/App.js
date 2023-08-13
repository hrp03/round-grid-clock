import './App.css';
import GridNumber from './components/grid-number/grid-number';
import "./css/zero.css";
import "./css/one.css";
import "./css/two.css";
import "./css/three.css";
import "./css/four.css";
import "./css/five.css";
import "./css/six.css";
import "./css/seven.css";
import "./css/eight.css";
import "./css/nine.css";
import { useState } from 'react';

function App() {

  const numToString = [
    'zero', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine'
  ]

  const [value, setValue] = useState({
    time: ['zero', 'zero', 'zero', 'zero', 'zero', 'zero']
  });

  let getTime = () => {
    
    let value = [];

    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    if(hour.toString().length === 1){
      value.push(numToString[0], numToString[hour]);
    }
    else {
      value.push(numToString[Math.floor(hour / 10)], numToString[hour % 10]);
    }

    if(minute.toString().length === 1){
      value.push(numToString[0], numToString[minute]);
    }
    else {
      value.push(numToString[Math.floor(minute / 10)], numToString[minute % 10]);
    }

    if(second.toString().length === 1){
      value.push(numToString[0], numToString[second]);
    }
    else {
      value.push(numToString[Math.floor(second / 10)], numToString[second % 10]);
    }

    setValue({time: value})

  };

  setInterval(getTime, 1000);

  return (
    <div className="app">
      <GridNumber number={value.time[0]}></GridNumber>
      <GridNumber number={value.time[1]}></GridNumber>
      <GridNumber number={value.time[2]}></GridNumber>
      <GridNumber number={value.time[3]}></GridNumber>
      <GridNumber number={value.time[4]}></GridNumber>
      <GridNumber number={value.time[5]}></GridNumber>
    </div>
  );
}

export default App;
