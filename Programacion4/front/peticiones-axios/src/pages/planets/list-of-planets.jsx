import CardPlanet from "../../components/planets/card-planet";
import { useState, useEffect } from "react";
import { getAllPlanets } from "../../services/dragon-ball-api/planets";

export default function ListOfPlanets() {
  const [chars, setChars] = useState([]); //chars -> characters
  useEffect(() => {
    getAllPlanets().then((data) => setChars(data?.items));
  }, []);
  return (
    <>
      <div className="flex flex-wrap p-8 w-full gap-1 justify-center align-top ">
        {chars.map((pl) => (
          <CardPlanet key={pl.id} {...pl} />
        ))}
      </div>
    </>
  );
}
