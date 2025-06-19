import { useState } from "react";

export function ListaTareas() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const Handler = (e) => {
    setText(e.target.value);
  };
  const handleTareas = () => {
    if (text == "") {
      alert("El campo no puede estar vacío");
      return;
    }
    console.log("handleTareas", text);
    if (list.includes(text)) {
      alert("La tarea ya existe");
      return;
    }
    setList((prevList) => {
      return [...prevList, text];
    });
  };
  const switchElement = (arr, index1, index2) => {
    const newArr = [...arr];
    const temp = newArr[index1];
    newArr[index1] = newArr[index2];
    newArr[index2] = temp;
    return newArr;
  };
  const handleEliminar = (index) => {
    console.log("handleEliminar");
    setList(() => {
      return list.slice(0, index).concat(list.slice(index + 1));
    });
  };
  const handleSubir = (index) => {
    if (index === 0) {
      alert("No se puede subir más");
      return;
    }
    console.log("handleSubir");
    setList(() => {
      return switchElement(list, index, index - 1);
    });
  };

  const handleBajar = (index) => {
    if (index === list.length - 1) {
      alert("No se puede bajar más");
      return;
    }
    console.log("handleBajar");

    setList(() => {
      return switchElement(list, index, index + 1);
    });
  };
  const handleCompletar = () => {
    console.log("handleCompletar");
    setList((prevList) => {
      return prevList.map((item, index) => {
        if (index === index) {
          return item + " (completada)";
        }
        return item;
      });
    });
  };
  return (
    <>
      <input
        onChange={(e) => Handler(e)}
        onClick
        type="text"
        name="usetText"
        value={text}
      />
      <button onClick={handleTareas}>agregarTarea</button>
      <ul>
        {list.map((item, index) => (
          <>
            <li key={index}>{item}</li>
            <button
              onClick={() => {
                handleEliminar(index);
              }}
            >
              Eliminar Tarea
            </button>
            <button
              onClick={() => {
                handleSubir(index);
              }}
            >
              Subir
            </button>
            <button
              onClick={() => {
                handleBajar(index);
              }}
            >
              Bajar
            </button>
            <button
              onClick={() => {
                handleCompletar(index);
              }}
            >
              Completar
            </button>
          </>
        ))}
      </ul>
    </>
  );
}
export default ListaTareas;
