import React from 'react'
import socios from "../socios.json"
import Card from "../components/card"


export default function Socios() {
  return (
    <>
    <ul>
    {socios.map((socio)=>{
        return(
        <li key={`${socio.id}`}>
            <Card  id={socio.id} nombre={socio.nombre} apellido={socio.apellido} estado={socio.estado}/>
        </li>
        )
    })}
    </ul>
    </>
  )
}
