import React from 'react'
import styled from 'styled-components'
import woman from '../img/woman.png'
import { AnimatedShape } from './AnimatedShape'

const Container = styled.div`
height: calc(100vh - 50px);
display: flex;
padding: 20px;
@media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`
const Left = styled.div`
width: 60%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`
const Right = styled.div`
width:40%;
@media only screen and (max-width: 480px) {
    display: none;
  }

`
const Title = styled.h1`
font-size : 60px;
width: 60%;
@media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 50px;
  }
`
const Descrip = styled.p`
font-size : 20px;
width: 60%;
margin-top: 20px;
@media only screen and (max-width: 480px) {
    width: 100%;
  }
`
const Info = styled.div`
display: flex;
margin-top: 50px;
width: 60%;
align-items: center;
justify-content: space-between;
@media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
`
const Contact = styled.div`
display: flex;
flex-direction: column;
`

const Phone = styled.span`
color: #f0667d;
`
const ContactText = styled.span`
color: gray;
font-weight: bold;
margin-top: 5px;
`
const Image = styled.img`
width: 100%;
border-radius: 5px;
`


const Btn =  styled.button`
border: none;
border-radius: 10px;
padding:  15px;
background-color: darkblue;
color: white ;
font-weight: bold;
letter-spacing:  3px;
cursor: pointer;
@media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`


const Intro = () => {
    return (
        <Container>
        <Left>
         <Title>Adventure in My Universe</Title>  
         <Descrip>Hello and welcome to the Bleach Wiki, a wiki dedicated to the Bleach series by Iliass reddad! We hope you enjoy your stay and help us </Descrip> 
         <Info>
             <Btn> Start a Project </Btn>
             <Contact>
                 <Phone> Call Us (+212) 654122456 </Phone>
                 <ContactText>  For any question or concern  </ContactText>
             </Contact>

         </Info>
        </Left>
        <Right> <Image  src={woman}></Image></Right>
        <AnimatedShape></AnimatedShape>
            
        </Container>
    )
}

export default Intro
