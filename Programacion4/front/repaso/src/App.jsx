import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [per, setPer]  = useState({
    id:"",
    name:"",
    ki:"",
    description:"",
    }
  )
  const [id, setId] = useState(1);
  function handleText(e){
    setId(e.target.value);
  }
  function handleSubmit(e){
    e.preventDefault();
    const data = new FormData(e.target);
    const idToFind = (data.get("idToFind"));
    if(idToFind >=1){
      setId(idToFind);
    }
  }
  console.log("componente creado");
  useEffect(()=>{
    fetch(`https://dragonball-api.com/api/characters/${id}` )
    .then(res => res.json())
    .then(data => setPer(data))//aca se pasa toda la data del JSON, sino debes pasar 1 por 1

    return () => {/* Acá cuando muero*/}

  },[id]);
  return (
  <>
    <h1>Id: {id}</h1>
    <h2>Nombre: {per.name}</h2>
    <span>Ki:{per.ki}</span>
    <p>Descripcion: {per.description}</p>
    <p>Genero:{per.gender}</p>
    <form onSubmit={handleSubmit}>
      <label htmlFor="idToFind">ID:</label>
      <input  type="text" name="idToFind" id="idToFind" />
      <input  onClick={(e) => handleSubmit}type="submit" value="search" />
    </form>
  </>
)
  
}

export default App
