import React, { useContext } from "react";
import { ContextoContador } from "../context/contexto-contador";

export default function Botones() {
  const { setContador } = useContext(ContextoContador);
  return (
    <div>
      <button
        onClick={() => {
          setContador((prev) => prev - 1);
        }}
      >
        Decrementar
      </button>
      <button
        onClick={() => {
          setContador((prev) => prev + 1);
        }}
      >
        Incrementar
      </button>
      <button
        onClick={() => {
          setContador(0);
        }}
      >
        resetear
      </button>
    </div>
  );
}
