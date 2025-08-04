import { useEffect } from "react";
import {
  getAllCharacters,
  getOneCharacterById,
  getOneCharacterByName,
} from "./services/dragon-ball-api";

function App() {
  useEffect(() => {
    getOneCharacterByName("Piccolo").then((data) => console.log(data));
  }, []);
  return (
    <>
      <h1>hello world</h1>
    </>
  );
}

export default App;
