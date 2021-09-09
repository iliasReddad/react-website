import React from 'react'
import styled from 'styled-components'
import woman from '../img/woman.png'
import { AnimatedShape } from './AnimatedShape'

const Container = styled.div`
display: flex;
@media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 30px 20px;
  }

`
const Left = styled.div`
width: 50%;
@media only screen and (max-width: 480px) {
    display: none;
  }
`
const Right = styled.div`
margin-top: 30px;
width:50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media only screen and (max-width: 480px) {
    width: 100%;
    margin-top: 0px;

  }
`;
const Image = styled.img`

width: 80%;
border-radius: 5px;
`
const Title = styled.span`
font-size: 70px;
font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
margin-left: 20px;
@media only screen and (max-width: 480px) {
    font-size: 35px;
  }



`
const Subt = styled.span`
font-size: 25px;
margin-top: 25px;
font-style: italic;
color: gray;
@media only screen and (max-width: 480px) {
    width: 100%;
    margin-top: 0px;
    font-size: 20px;


  }

`
const Descr = styled.p`
font-size: 20px;
font-style: oblique;
color: #af6161;
margin-top: 30px;
margin-bottom: 30px;
margin-right: 10px;
@media only screen and (max-width: 480px) {
    margin-bottom: 15px;



  }

`
const Btn =  styled.button`
border: none;
border-radius: 10px;
padding:  15px 20px;
background-color: darkblue;
color: white ;
font-weight: bold;
letter-spacing:  3px;
cursor: pointer;
width: 150px;
`


export const Features = () => {
    return (
        <Container>
            <Left>
             <Image src={woman} ></Image>
            </Left>
            <Right>
                <Title><b>good</b>  design <br/> 
                <b>good</b> business</Title>
                <Subt> Solo Leveling (hangeul : 나 혼자만 레벨업, RR : Na honjaman lebel-eob) est une série de romans sud-coréens</Subt>
                <Descr>Une adaptation en webtoon, illustrée par Dubu (Redice Studio), est publiée sur le site KakaoPage depuis le 4 mars 2018 en Corée du Sud3. La version française est éditée et publiée par Delcourt sur sa plateforme en ligne Verytoon depuis le 25 janvier 2021, et en volume physique depuis le 7 avril 2021 dans sa collection KBooks4. La maison d'édition américaine Yen Press édite les versions anglaises des romans et du webtoon depuis le février 20215.</Descr>
                <Btn> Learn More</Btn>
                <AnimatedShape></AnimatedShape>
            </Right>
        </Container>
    )
}
