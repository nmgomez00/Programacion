import { useState } from "react";

export function Toggle() {
  const [isOn, setIsOn] = useState(false);
  if (isOn) {
    return (
      <>
        <div>Contenido mostrado</div>;
        <button
          onClick={() => {
            setIsOn(!isOn);
          }}
        >
          Toggle)
        </button>
        ;
      </>
    );
  } else {
    return (
      <>
        <button
          onClick={() => {
            setIsOn(!isOn);
          }}
        >
          Toggle
        </button>
        ;
      </>
    );
  }
}

export default Toggle;
