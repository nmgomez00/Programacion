import { useState } from "react";
import "./App.css";
import TimeUnit from "./components/time-unit";

function App() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const handleHoursChange = (value) => {
    setHours(value);
    setMinutes(value * 60);
    setSeconds(value * 3600);
  };

  const handleMinutesChange = (value) => {
    setHours(value * 60);
    setMinutes(value);
    setSeconds(value / 60);
  };

  const handleSecondsChange = (value) => {
    setHours(value / 3600);
    setMinutes(value / 60);
    setSeconds(value);
  };

  return (
    <>
      <h1>Time Converter</h1>
      <TimeUnit
        label="Horas:"
        name="hours"
        value={hours}
        onChange={({ target }) => handleHoursChange(target.value)}
      />
      <TimeUnit
        label="Minutos:"
        name="minutes"
        value={minutes}
        onChange={({ target }) => handleMinutesChange(target.value)}
      />

      <TimeUnit
        label="Segundos:"
        name="seconds"
        value={seconds}
        onChange={({ target }) => handleSecondsChange(target.value)}
      />
    </>
  );
}

export default App;
