import { useParams } from "wouter"
import plants from "../data"
import Page404 from "./page-404";
import {Link} from "wouter";
export default function PlantDetail() {
    const {id} = useParams();
    const plant = plants.find(pl => pl.id == id);
    if(plant == null){
        return <Page404/>
    }
  return (
    <div>
        <h1>Id: {id}</h1>
        <p>Nombre: {plant.name}</p>
        <Link href="/plants">Go Back</Link>
    </div>
  )
}
