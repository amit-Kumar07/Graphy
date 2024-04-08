import React from 'react'
import { useContext } from 'react'
import { GreetContext } from './A'
const C = () => {
  const useCon =  useContext(GreetContext)
    console.log(useCon)
  return (
    <div>
    <h1>Greet: {useCon.greet} {useCon.greet2}</h1>
    </div>
  )
}

export default C