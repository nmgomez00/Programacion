import { useState } from "react";
import Team from "./team";

export default function Game() {
    const [cuerdaEquipos, setCuerdaEquipos] = useState({
        red:5, green: 5,
    })
    //simplificar este codigo aun más
    const handleTirar = (color)=>{
        
        if(color === "red"){
            const green = cuerdaEquipos.green - 1;
            setCuerdaEquipos({
                green,
                [color]: cuerdaEquipos[color] +1,
            })
        }else{
            const red = cuerdaEquipos.red - 1;
            setCuerdaEquipos({
                red,
                [color]: cuerdaEquipos[color] +1,
            })
        }
    }

    return (
        <>
        <h1 style={{margin:"0 auto"}}>Tug of war</h1>
    <main style={{display:"flex", alignItems:"center", gap:"20px"}}>
        <Team color="green" cantCuerda={cuerdaEquipos.green} onTirar={handleTirar}/>
        <div>
        <div> Longitud: {cuerdaEquipos.green + cuerdaEquipos.red}</div>
        ---------------------------------------------------
        </div>
        <Team color="red" cantCuerda={cuerdaEquipos.red} onTirar={handleTirar}/>
    </main>
    </>
  )
}
