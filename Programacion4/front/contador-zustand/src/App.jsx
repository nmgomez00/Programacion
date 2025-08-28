import { useEffect } from "react";
import { useStore } from "./store/useContadorStore";

export default function App() {
  const usuarios = useStore((state) => state.usuarios);
  const cargarUsuarios = useStore((state) => state.cargarUsuarios);
  useEffect(() => {
    cargarUsuarios();
  }, []);
  return (
    <div>
      <h1>Usuarios</h1>
      <ul>
        {usuarios.length > 0 ? (
          usuarios.map((usuario) => (
            <li key={usuario.id}>
              {usuario.name} - {usuario.email}
            </li>
          ))
        ) : (
          <li>No hay usuarios disponibles.</li>
        )}
      </ul>
    </div>
  );
}
