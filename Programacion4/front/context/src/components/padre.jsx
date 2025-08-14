import React, { useContext } from 'react'
import Hijo from './hijo'
import CountContext from '../contexts/count';

export default function Padre() {
    const{handleIncrementar} = useContext(CountContext);

  return (
    <div className="border-2 border-green-500">
        <h3>Soy el padre</h3>
        <button onClick={handleIncrementar}>Aumentar desde el padre</button>

        <Hijo />
        </div>
  )
}
