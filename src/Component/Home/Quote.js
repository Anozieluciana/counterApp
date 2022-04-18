import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import  {RecentContext} from './GlobalState'

 const Quote = () => {
    const {viewItems, me} = useContext(RecentContext);
    
    const [myQuote, setMyquote] = useState([])

    useEffect(()=>{
        const ref = JSON.parse(localStorage.getItem("view"));
        setMyquote(ref)
    },[])


 
  return (
    <div>
        <Con>
            <Wrap>
                {myQuote?.map((props)=>(
                    <>
                    <Input1>HELLO</Input1>
                    <Input2>HI</Input2>
                     </>
                ))} 
            </Wrap>
            {me} 
        </Con>
    </div>
  )
}

export default Quote

const Con = styled.div`
    height: 100vh;
    width: 100%;
    /* min-width: 100vw; */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
`
const Wrap = styled.div`
    height: 700px;
    width: 700px;
    background-color: darkolivegreen;
    border-radius: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 70px 3px 70px 3px;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;

    button{
        height: 50px;
        width: 150px;
        border-radius: 10px;
        background-color: darkgreen;
        outline: none;
        border: solid 2px white;
        font-style: italic;
        font-size: 17px;

        :hover{
            background-color: yellowgreen;
            cursor: pointer;
            color: white;
        }
    }
`

const Input1 = styled.div`
    height: 50px;
    width: 450px;
    background-color: white;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    font-size: 17px;
`

const Input2 = styled.p `
    height: 150px;
    width: 450px;
    background-color: white;
    margin-bottom: 50px;
    display: flex;
    /* align-items: center; */
    border-radius: 10px;
    font-size: 17px;
`