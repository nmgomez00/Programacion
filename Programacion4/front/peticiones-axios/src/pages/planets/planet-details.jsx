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
      <section className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={planet.image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              {planet.description
                ? planet.description
                : "No description available"}
            </p>
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
        </div>
      </section>
    </main>
  );
}
