import React from "react";
import CardCharacter from "../../components/characters/card-character";
import { useState, useEffect } from "react";
import {
  getAllCharacters,
  getOneCharacterById,
  getOneCharacterByName,
} from "../../services/dragon-ball-api";

export default function ListOfCharacters() {
  const [chars, setChars] = useState([]); //chars -> characters
  useEffect(() => {
    getAllCharacters().then((data) => setChars(data?.items));
    getOneCharacterById(1).then((data) => console.log(data));
    getOneCharacterByName("Goku").then((data) => console.log(data));
  }, []);
  return (
    <div className="flex flex-wrap p-8 w-full gap-1 justify-center align-top ">
      {chars.map((ch) => (
        <CardCharacter key={ch.id} {...ch} />
      ))}
    </div>
  );
}
