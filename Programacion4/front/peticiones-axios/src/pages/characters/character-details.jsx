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
      <section className="hero bg-base-200  mx-auto w-3/4">
        <div className="hero-content flex-col lg:flex-row ">
          <img
            src={character.image}
            alt={"image for " + character.name}
           className="max-w-sm rounded-lg shadow-2xl  max-h-80"
          />
          <div>
            <h1 className="text-5xl font-bold">{character.name}</h1>  

            <p className="py-6 max-h-60 overflow-y-scroll">{character.description}</p>
          </div>
        </div>
      </section>
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={character?.originPlanet?.image}
      alt={character?.originPlanet?.name}
      className="max-w-sm rounded-lg shadow-2xl  max-h-52"
    />
    <div>
      <h1 className="text-5xl font-bold">{character?.originPlanet?.name}</h1>
      <p className="py-6">
        {character?.originPlanet?.description}
      </p>
      <Link  className="btn btn-primary" href={character?.originPlanet?.id ? `/planets/${character?.originPlanet?.id}` : "/"}>
              {character?.originPlanet ? "planeta: " + character?.originPlanet?.name : "No hay planeta de origen"}
            </Link>   
    </div>
  </div>
</div>
    </main>
  );
}
