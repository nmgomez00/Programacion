import { useState } from "react";

function App() {
  /*
  const STATES = Object.freeze({
    LIQUIDO: "Liquido",
    SOLIDO: "Solido",
    GASEOSO: "Gaseoso",
  });

  const [water, setWater] = useState(STATES.LIQUIDO);
*/
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
    // console.log("Nombre cambiado a:", e.target.value);
    // console.log("Nombre cambiado a:", name);
  };
  return (
    /*
    <>
      <h1>Lampara</h1>
      <p>Está {isOn ? "Prendida" : " Apagada"}</p>
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? "Apagar" : " Prender"}
      </button>
    </>
    <>
      <h1>Agua</h1>
      <p>El estado es {water}</p>
      <section>
        {Object.values(STATES).map((s) => (
          <button key={s} onClick={() => setWater(s)}>
            Cambiar a {s}
          </button>
        ))}
      </section>
    </>
    */
    <>
      <h1>Inputs Controlados</h1>
      <div>
        <label htmlFor="nombre"> Nombre:</label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          placeholder="Nombre"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <p>Este es tu nombre: {name}</p>
      <p>{name.length >= 30 && "Te pasaste"}</p>
    </>
  );
}

export default App;
