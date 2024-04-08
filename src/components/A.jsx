import React from 'react'
import { createContext } from 'react'
import B from './B'
const GreetContext = createContext()

export default function A() {
    const greet = 'Hello Graphy'
    const greet2 = 'Hello Graphy2'

  return (
    <div>
        <GreetContext.Provider value={{greet, greet2}}>
        <B/>
        </GreetContext.Provider>
    </div>
  )
}

export { GreetContext}