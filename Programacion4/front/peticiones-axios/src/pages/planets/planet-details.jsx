import { useEffect, useState } from "react";
import { useParams } from "wouter";
import { getOnePlanetById } from "../../services/dragon-ball-api/planets";
import CardCharacter from "../../components/characters/card-character";

export default function PlanetDetails() {
  const [planet, setPlanet] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getOnePlanetById(id).then((data) => setPlanet(data));
  }, []);
  return (
    <main>
      <section className="hero bg-base-200 mx-auto w-3/4 ">
        <div className="hero-content flex-col lg:flex-col items-start">
          <div className=" lg:flex-col  flex-col flex-nowrap">
          <img src={planet.image} className="max-w-sm rounded-lg shadow-2xl" />
          <h1 className="text-5xl font-bold">{planet.name}</h1>
            <p className="py-6 max-h-60 overflow-y-scroll">
              {planet.description
                ? planet.description
                : "No description available"}
            </p>
          </div>
          {planet.characters && planet.characters.length > 0 ? (
              <div>
                <h2 className="text-3xl font-bold">Characters:</h2>
                <div className="flex flex-wrap gap-4">
                  {planet.characters.map((character) => (
                    <CardCharacter key={character.id} {...character} />
                  ))}
                </div>
              </div>
            ) : (
              <p>No characters found for this planet.</p>
            )}
        </div>
      </section>
    </main>
  );
}
