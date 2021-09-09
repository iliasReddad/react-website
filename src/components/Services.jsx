import React from 'react'
import styled from 'styled-components'
import how from '../img/how.png'
import { MiniCard } from './MiniCard'
import Play from "../img/play.png";


const Container = styled.div`
display: flex;
height: 100%;
@media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`

const Left = styled.div`
width: 50%;
@media only screen and (max-width: 480px) {
    display: none;
  }
`

const Right = styled.div`
width: 50%;
@media only screen and (max-width: 480px) {
width :100%  }

`
const Image = styled.img`
height: 100%;
`

const Wrapper = styled.div`
    padding: 50px ;
    display : flex ;
    flex-direction: column;
    @media only screen and (max-width: 480px) {
    padding: 10px;
  }
`


const Title = styled.h1`
color: #39005f;
font-size: 50px;
font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`
const Subt = styled.p`
font-size: 25px;
margin-top: 25px;
font-style: italic;
color: #141314;
@media only screen and (max-width: 480px) {
    font-size: 18px;
    margin-top: 20px;

  }

`

const CardCont = styled.div`
    display : flex ;
    justify-content: space-between;
    margin-top: 50px;
`
const Btn =  styled.button`
 width: 180px;
  border: none;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  padding: 15px;
  margin-top: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
`
const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
`;

export const Services = () => {
    return (
        <Container>
            <Left>
                <Image src={how}></Image>
            </Left>
            <Right>
                <Wrapper>
                    <Title>Simple process to Start</Title>
                    <Subt>  We provide digital experience services to startups and small
            businesses to looking for a partner of their digital media, design &
            development, lead generation and communications requirents. We work
            with you, not for you. Although we have a great resources </Subt>
                <CardCont>
                    <MiniCard></MiniCard>
                    <MiniCard></MiniCard>
                    <MiniCard></MiniCard>
                    
                </CardCont>
                <Btn> <Icon src={Play} />
            How its works</Btn>

                </Wrapper>

            </Right>
            
        </Container>
    )
}
