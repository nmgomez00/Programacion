import { useState } from "react";
import { Hijo } from "./Hijo";

export function Padre() {
  const [isOn, setIsOn] = useState(false);

  return (
    <>
      <Hijo isOn={isOn}></Hijo>
      <button onClick={() => setIsOn(!isOn)}>Cambiar al Hijo</button>
    </>
  );
}

export default Padre;
