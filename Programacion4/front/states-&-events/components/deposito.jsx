
import Pepe from './pepe.jsx'
import {useState} from 'react'
export default function Deposito() {
  const [unidades, setUnidades] = useState(5);
  const depositar = (cant)=> setUnidades(unidades + cant);
  
  return (
    <>
     <div>Total oro depositado: 0 {unidades} unidades</div>
     <Pepe onMinar={depositar}/>
    </>
  )
}
