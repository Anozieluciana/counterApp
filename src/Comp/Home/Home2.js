import React, { useContext } from 'react'
import Add from './Add'
import Sub from './Sub'
import { CountState } from './GlobalState'
import styledComponents from 'styled-components'

const Home2 = () => {
    const {count} = useContext(CountState)
    
  return (
    <div>
        <Add/>
        <Hold>
        <h1>{count}</h1>
        </Hold>
        <Sub/>
    </div>
  )
}


export  default Home2

const Hold = styledComponents.div`
height: 150px;
width: 150px;
background-color: black;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 40px;
border-radius: 100%;
margin-top:10px;

h1{
  font-size: 60px;
  font-weight: 900;
  color: red;
}
`