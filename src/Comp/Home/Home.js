import React, { useState } from 'react'
import styled from 'styled-components'



const Home = () => {
  const [counter, SetCounter] = useState(2)

  const addCount = () =>{
    SetCounter (counter + 1)
  }

  return (
    <div>
      <Con>
        <Wrap>
            <Circle>
              <h3></h3>
            </Circle>
            <Hold>
              <button onClick={addCount}>+</button>
              <button>-</button>
              <button>*</button>
              <button>/</button>
            </Hold>
        </Wrap>
      </Con>
    </div>
  )
}

export default Home
const Con = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

`
const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`

const Circle = styled.div`
      height: 150px;
      width: 150px;
      background-color: black;
      display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    border-radius: 100%;

      h3{
        font-size: 60px;
        font-weight: 900;
        color: white;
      }
`

const Hold = styled.div`
  display: flex;

      button{
        height: 60px;
        width: 150px;
        background-color: aqua;
        border-radius: 10px;
        font-size: 20px;
        font-weight: 900;
      }
`

