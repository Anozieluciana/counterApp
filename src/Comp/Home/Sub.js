import React, { useContext } from 'react'
import styledComponents from 'styled-components'
import { CountState } from './GlobalState'

 const Sub = () => {

  const {divideCount, multiplyCount} = useContext(CountState)
  return (
    <Ma>
         <button onClick={divideCount}>/</button>
              <button onClick={multiplyCount}>*</button>
    </Ma>
  )
}

export default Sub

const Ma = styledComponents.div`
button{
  height: 60px;
  width: 150px;
  background-color: aqua;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 900;
}
`