import React from "react";
import CardCharacter from "../../components/characters/card-character";
import { useState, useEffect } from "react";
import { getAllCharacters } from "../../services/dragon-ball-api";

export default function ListOfCharacters() {
  const [chars, setChars] = useState([]); //chars -> characters
  useEffect(() => {
    getAllCharacters().then((data) => setChars(data?.items));
  }, []);
  return (
    <>
      <div className="flex flex-wrap p-8 w-full gap-1 justify-center align-top ">
        {chars.map((ch) => (
          <CardCharacter key={ch.id} {...ch} />
        ))}
      </div>
    </>
  );
}
