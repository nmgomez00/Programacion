import { Link } from "wouter"
import { plants } from "../data"

export default function Plants(){
    return <main>
        <h1>Este es listado de las plantas</h1>
        <ul>
            <ul>
                {plants.map((pl)=>{
                    <Link href={`/plants/${pl.id}`}>
                        {pl.name}
                        </Link>    
                })}
            </ul>
        </ul>
    </main>
}