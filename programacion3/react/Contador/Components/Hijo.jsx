import { useState } from "react";

export function Hijo({ isOn }) {
  if (isOn) {
    return <div>El hijo está activo</div>;
  } else {
    return <div>El hijo está inactivo</div>;
  }
}

export default Hijo;
