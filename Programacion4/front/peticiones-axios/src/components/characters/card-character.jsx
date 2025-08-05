import React from "react";

export default function CardCharacter({ id, image, name, ki, description }) {
  return (
    <div
      className="card bg-base-100 w-96 shadow-sm border-2 border-transparent hover:border-white 
    transition"
    >
      <figure className="flex flex-col">
        <img src={image} className="h-72" alt={`Imagen de ${name}`} />
        <figcaption>Ki: {ki}</figcaption>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="h-36 overflow-y-scroll">{description}</p>
        <div className="card-actions justify-center">
          <Link href={`/character/${id}`} className="btn btn-primary ">
            Show more
          </Link>
        </div>
      </div>
    </div>
  );
}
