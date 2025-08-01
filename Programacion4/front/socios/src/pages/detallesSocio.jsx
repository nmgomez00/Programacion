import React from 'react'
import { useParams } from "wouter"
import socios from "../socios.json"
import Card from  "../components/card"

export default function DetallesSocio() {
  const {id} = useParams();
  console.log(id);
  const socio = socios.find((s)=> s.id ==id )
  console.log(socio);

  return (
        <>
        <Card  id={socio.id} nombre={socio.nombre} apellido={socio.apellido} estado={socio.estado}/>
    </>
  )
}
