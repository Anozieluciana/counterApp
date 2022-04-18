import React, { useContext } from 'react'
import styledComponents from 'styled-components'
import { CountState } from './GlobalState'

 const Add = () => {

    const {addCount, minusCount } = useContext(CountState)
  return (
    <Ma>
         <button onClick={()=>{
           addCount()

           console.log('hello')
         }}>+</button>
        
              <button onClick={()=>{
                minusCount()
                console.log('hell')
              }}>-</button>
    </Ma>
  )
}

export default Add

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