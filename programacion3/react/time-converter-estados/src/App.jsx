import { useReducer, useState } from "react";
import "./App.css";
import TimeUnit from "./components/time-unit";
import {initialValue, timeReducer, TYPES} from "./time-reducer.js"


function App() {
  
  
  const [time, timeDispatch] = useReducer(timeReducer,initialValue);
  const handleTimeChange = ({target}) => {
    const {name:type, value:payload} = target;
    timeDispatch({type,payload});
  };



  return (
    <>
      <h1>Time Converter</h1>
      <TimeUnit
        label="Horas:"
        name={TYPES.HOUR}
        value={time.hours}
        onChange={handleTimeChange}
      />
      <TimeUnit
        label="Minutos:"
        name={TYPES.MINUTES}
        value={time.minutes}
        onChange={handleTimeChange}
      />

      <TimeUnit
        label="Segundos:"
        name={TYPES.SECOND}
        value={time.seconds}
        onChange={handleTimeChange}
      />
       <TimeUnit
        label="Dias:"
        name={TYPES.DAYS}
        value={time.days}
        onChange={handleTimeChange}
      />
      <button name={TYPES.RESET} onClick={handleTimeChange}> 
        reset
      </button>
      <button onClick={()=> timeDispatch({type:TYPES.RESET})}>RESET CORRECTO</button>
    </>
  );
}



export default App;




