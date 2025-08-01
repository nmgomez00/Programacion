import { Link } from "wouter";
import { plants } from "../data";

export default function Plants() {
  return (
    <main>
      <h1>Este es listado de las plantas</h1>
      <ul>
        {plants.map((plant) => {
          return (
            <li key={`${plant.id}`}>
              <Link href={`/plants/${plant.id}`}>{plant.name}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
