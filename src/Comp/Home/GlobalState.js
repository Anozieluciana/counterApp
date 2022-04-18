import React, { createContext, useState } from 'react'

export const CountState = createContext()

export const GlobalState = ({children}) => {
  const [count, SetCount] = useState(2)

  const addCount = () =>{
    SetCount(count + 1)
  }
  const minusCount = () =>{
    SetCount(count - 1)
  }
  const multiplyCount = () =>{
    SetCount(count * 1)
  }
  const divideCount = () =>{
    SetCount(count / 1)
  }

  return (
    <CountState.Provider value={{count,addCount,minusCount, multiplyCount,divideCount}}>
            {children}
    </CountState.Provider >
  )
}
