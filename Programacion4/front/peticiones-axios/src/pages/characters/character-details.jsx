import { useEffect, useState } from "react";
import { useParams, Link } from "wouter";
import { getOneCharacterById } from "../../services/dragon-ball-api/";

export default function CharacterDetails() {
  const [character, setCharacter] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getOneCharacterById(id).then((data) => setCharacter(data));
  }, []);
  return (
    <main>
      <section className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={character.image}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{character.name}</h1>
            {/* <Link href={`/planets/${character.name}`} className="text-xl">
              {character.originPlanet}
            </Link> */}

            <p className="py-6">{character.description}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
