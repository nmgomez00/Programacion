import React, { useContext } from 'react'
import CountContext from '../contexts/count'

export default function Nieto() {
    const {count} = useContext(CountContext)
  return (
    <div className="border-2 border-purple-600">
        <h5>Soy el nieto</h5>
        <p>Yo recibo el contador, y es {count}</p>
    </div>
  )
}
