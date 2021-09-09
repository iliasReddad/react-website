import React from 'react'
import styled from 'styled-components'
import search from '../img/search.png'

 const Container = styled.div`
 width: 100px;
 padding:  20px;
 display: flex;
 flex-direction: column;
 align-items: center;
 -webkit-box-shadow: 3px 2px 16px 7px #000000; 
box-shadow: 3px 2px 16px 7px #000000;
@media only screen and (max-width: 480px) {
    width: 50px
  }
 `
 const Image = styled.img`
 width: 20px;
 `
 const Text = styled.span`
 margin-top: 10px;
  text-align:center;
  @media only screen and (max-width: 480px) {
    font-size: 14px; }
 `;
 const Btn =  styled.button`
border: 2px solid white;
border-radius: 10px;
padding:  10px 15 px;
background-color: crimson;
color: white;
font-weight: bold;
cursor: pointer;
`

export const MiniCard = () => {
    return (
        <Container>
            <Image src={search}></Image>
            <Text>
            Visual primitives for the component age..
            </Text>
            
        </Container>
    )
}
