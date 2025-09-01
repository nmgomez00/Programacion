import React from 'react'
import { useForm } from 'react-hook-form';

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const userValidation = z.object({
  nombre: z.string().nonempty("El nombre es obligatorio").max(50, "El nombre es muy largo"),
  email: z.email("El formato no es valido").nonempty("El email es obligatorio"),
});



export default function App() {
  const {handleSubmit, register, formState:{errors}} = useForm({resolver: zodResolver(userValidation)});
  const onSubmit = data => console.log(data);
  return (
    <>
      <h1>React-hook-form + ZOD</h1>
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className="control">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" {...register("nombre")} />
          {errors?.nombre && <span className="error">{errors.nombre.message}</span>}
        </div>
        <div className="control">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email"  {...register("email")}/>
          {errors?.email && <span className="error">{errors.email.message}</span>}
        </div>
        <button>Enviar</button>
      </form>
    </>
  )
}
