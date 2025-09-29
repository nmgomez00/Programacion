
import React, {useEffect, useState } from 'react';
import { getAllPanchos, createPancho } from './services/panchos';

export default function App() {
const [panchos,setPanchos] = useState([]);
useEffect(() => {
  getAllPanchos().then(setPanchos);
}, []);
// returilizar el formulario para actualizar y crear
// para editar necesito el id
// y componentizar el formulario
const handleSubmit = async (e) => {
    e.preventDefault();
        const form = e.target;
        const newPancho = {
          nombre: form.nombre.value,
          isVegano: form.isVegano.checked,
          precio: Number(form.precio.value),
          aderezos: form.aderezos.value.split(",").map(a => a.trim()),
        };
        /*
        otra forma de hacerlo
        const formData = new FormData(form);
        const pancho = Object.fromEntries(formData.entries());
        pancho.isVegano = formData.get("isVegano") === "on";
        pancho.precio = Number(pancho.precio);
        pancho.aderezos = pancho.aderezos.split(",").map(a => a.trim());
        */
        createPancho(newPancho).then(data => {
          delete data.aderezos; // no me interesa
          delete data.isVegano; // no me interesa
          delete data.precio; // no me interesa
          setPanchos((prev) => [...prev, data]);
          form.reset();
        });
}
  return (
    <div>

      <h1>Pancheria</h1>
      <ul>{panchos.map(p=> (
        <li key={p.id}> {p.id} - {p.nombre} - ${p.precio}</li>
      ))}</ul>
      <form onSubmit={handleSubmit}>
        <h2>Crear Pancho</h2>
        <br />
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" />
        <br />
        <label htmlFor="isVegano"> es vegano? </label>
        <input type="checkbox" id="isVegano" name="isVegano" />
        <br />
        <label htmlFor="precio">Precio:</label>
        <input type="number" id="precio" name="precio" />
        <br />
        <label htmlFor="aderezos"> Aderezos lista:</label>
        <textarea name="aderezos" id="aderezos"></textarea>
        <br />
        <button type="submit">Crear Pancho</button>
      </form>
    </div>
  )
}
