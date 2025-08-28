import { create } from "zustand";
//import { persist } from "zustand/middleware";

export const useStore = create((set) => ({
  usuarios: [],
  cargarUsuarios: async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      set({ usuarios: data });
    } catch (error) {
      console.error("Error al cargar usuarios:", error);
    }
  },
}));
