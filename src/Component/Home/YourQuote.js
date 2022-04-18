import React from 'react'
import styledComponents from 'styled-components'

 const YourQuote = () => {
  return (
    <div>
        <Con>
            <Wrap>
                <Post>bbn xmmnx</Post>
                <Name>lu</Name>
            </Wrap>
        </Con>
    </div>
  )
}

export default YourQuote

const Con = styledComponents.div`
height: 100vh;
width: 100%;
mini-height:100vh;
background-color:black; 
   display:flex;
   justify-content:center;
   align-items:center;
  
`
const Wrap = styledComponents.div`
height: 300px;
width: 600px;
background-color: darkolivegreen;
border-radius: 20px;
flex-direction: column;
justify-content: center;
align-items: center;
display: flex;
border-radius: 70px 3px 70px 3px;
box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
`

const Post = styledComponents.div`
    height:90px;
    width:480px;
    background:white;
    margin-bottom:50px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:20px;
    font-weight:800;
    font-family:italic;
`

const Name = styledComponents.div`
height:70px;
width:300px;
background:white; 
display:flex;
align-items:center;
justify-content:center;
font-size:19px;
    font-weight:400;
    font-family:italic;
`