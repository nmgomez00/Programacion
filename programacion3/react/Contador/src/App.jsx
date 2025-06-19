import { useState } from "react";
import { Contador } from "../Components/Contador";
import { InputControlado } from "../Components/InputControlado";
import { Toggle } from "../Components/Toggle";
import { Padre } from "../Components/Padre";
import { ListaTareas } from "../Components/ListaTareas";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Contador></Contador>
      <br />
      <InputControlado></InputControlado>
      <br />
      <Toggle> </Toggle>
      <br />
      <Padre></Padre>
      <br />
      <ListaTareas></ListaTareas>
    </>
  );
}

export default App;
