import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
height : 50px;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    align-items: center;
    display : flex ;
    justify-content : space-between;
`

const Left = styled.div`
width : 60%  ;  
display : flex ;
align-items: center;
justify-content: space-between;
  ;
`
const Logo = styled.h2`
font-weight : bold;
text-decoration: underline crimson;
`

const Menu = styled.ul`
display: flex;
list-style: none;
@media only screen and (max-width: 480px) {
    display: none;
  }
`
const MenuItem =  styled.li`
margin-right : 30px ;
font-size :medium ;
font-weight: bold;
color: gray;
`
const Btn =  styled.button`
border: 2px solid white;
border-radius: 10px;
padding:  10px 15 px;
background-color: crimson;
color: white;
font-weight: bold;
cursor: pointer;
`



const Navbar = () => {
    return (
        <Container>
            <Wrapper> 
            <Left>
            <Logo> Agency </Logo>
            <Menu>
                <MenuItem>Home</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Services</MenuItem>
                <MenuItem>Pricing</MenuItem>
                <MenuItem>Contact</MenuItem>
            </Menu>
            </Left>
            <Btn>JOIN TODAY</Btn>    
    
                
                
             </Wrapper>
            
        </Container>
    )
}

export default Navbar
