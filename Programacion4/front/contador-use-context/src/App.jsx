import React from "react";
import DisplayContador from "./components/display-contador";
import Botones from "./components/botones";

export default function App() {
  return (
    <main>
      <h1>Contador con context</h1>
      <DisplayContador />
      <Botones />
    </main>
  );
}
