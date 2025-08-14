import { useState } from "react";
import Team from "./team";

export default function Game() {
  const [cuerdaEquipos, setCuerdaEquipos] = useState({
    red: 5,
    green: 5,
  });

  //simplificar este codigo aun máa
  const handleTirar = (color) => {
    const oppositeColor = Object.keys(cuerdaEquipos).filter(
      (c) => c !== color
    )[0];
    setCuerdaEquipos((prev) => ({
      [color]: prev[color] + 1,
      [oppositeColor]: prev[oppositeColor] - 1,
    }));
  };

  return (
    <>
      <h1 style={{ margin: "0 auto" }}>Tug of war</h1>
      <main style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Team
          color="green"
          cantCuerda={cuerdaEquipos.green}
          onTirar={handleTirar}
        />
        <div>
          <div> Longitud: {cuerdaEquipos.green + cuerdaEquipos.red}</div>
          ---------------------------------------------------
        </div>
        <Team
          color="red"
          cantCuerda={cuerdaEquipos.red}
          onTirar={handleTirar}
        />
      </main>
    </>
  );
}
