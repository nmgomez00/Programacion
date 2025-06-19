import { useState } from "react";

export function Contador() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Sumar
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        {" "}
        Restar
      </button>

      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Resetear
      </button>
    </>
  );
}

export default Contador;
