import React from 'react';
import {useEffect,useState} from "react";

export default function Cursor() {
 const [border, setBorder] = useState("border-green-600")
 useEffect(()=>{
  
    setTimeout(()=>{setBorder("border-blue-600"),1000})
    return ()=> setBorder("border-red-600");
 },[]);
//tarea. Hacer que el icono siga al cursor. Usar la API windows.client, hacer con style no className
 const [pos,setPos] = useState({x:0,y:0});
 useEffect(()=>{},[]);
  return (
        <div 
        //style = {{}}
        className={ `${border} z-[-1] top-0 left-0 bg-gray-600 
        absolute w-20 h-20  border-2 rounded-full transition duration-200
        `}>

        </div>
  )
}

