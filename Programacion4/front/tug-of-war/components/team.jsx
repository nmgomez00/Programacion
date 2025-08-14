import React from "react";

export default function Team({ color, cantCuerda, onTirar }) {
  return (
    <div>
      <h2>
        Equipo color: <span style={{ color }}> {color} </span>
      </h2>
      <p>Tirando: {cantCuerda}</p>
      <button onClick={() => onTirar(color)}>tirar 1 m</button>
    </div>
  );
}
