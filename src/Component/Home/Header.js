import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div>
        <Con>
            <Wrap>
                <img to='home' src='./dish.png' alt=''/>
                <Card1 to='/'>Write Quote</Card1>
                <Card2 to='your'>View Quote</Card2> 
            </Wrap>
        </Con>
    </div>
  )
}

export default Header

const Con = styled.div`
    height: 90px;
    width: 100%;
    background-color: wheat;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: solid 1px gray;
`
const Wrap = styled.div`
    height: 70px;
    width: 85%;
    /* background-color: darkorchid; */
    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
        height: 50px;
        width: 50px;
    }

`
const Card1 = styled(Link)`
        height: 50px;
        width: 200px;
        border: none;
        outline: none;
        background-color: darkolivegreen;
        border-radius: 10px;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 17px;
        font-weight: 700;
        font-style: italic;

`
const Card2 = styled(Link)`
        height: 50px;
        width: 200px;
        border: none;
        outline: none;
        background-color: darkolivegreen;
        border-radius: 10px;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 17px;
        font-weight: 700;
        font-style: italic;
        

`