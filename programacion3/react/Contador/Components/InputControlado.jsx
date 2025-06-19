import { useState } from "react";

export function InputControlado() {
  const [text, setText] = useState("");
  const Handler = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <input
        onChange={(e) => Handler(e)}
        type="text"
        name="usetText"
        value={text}
      />
    </>
  );
}

export default InputControlado;
