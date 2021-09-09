import styled from "styled-components";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import { Features } from "./components/Features";
import { Services} from "./components/Services";
import Price from "./components/Price";
import Contatc from "./components/Contatc";
import Footer from "./components/Footer";


const Container = styled.div`
height: 100vh;
overflow: hidden;
position: relative;

`
const Shape = styled.div`
position: absolute;
height: 100%;
width: 100%;
top: 0;
z-index: -1;
clip-path: polygon(73% 0, 100% 0, 100% 100%, 47% 100%);
background-color: #0520a8;
`
const Shape3 = styled.div`
position: absolute;
height: 100%;
width: 100%;
top: 0;
z-index: -1;
clip-path: polygon(0 0, 35% 0%, 35% 100%, 0% 100%);
background-color: #f7558bdc;
`;
const Shape2 = styled.div`
position: absolute;
height: 100%;
width: 100%;
top: 0;
z-index: -1;
clip-path: polygon(0 0, 52% 0%, 35% 100%, 0 100%);
background-color: #fc4a53;
`


const App = () => {
    const smallScreen = window.screen.width <= 480 ? true : false;
    return <>
     <Container>
        <Navbar> </Navbar>
        <Intro></Intro>
        <Shape></Shape>
        </Container>
         <Container>
         <Features></Features>
         <Shape2></Shape2>
         </Container>
         <Container>
         <Services></Services>
         {!smallScreen && <Shape3> </Shape3>}
         </Container>
         <Container>
         <Shape></Shape>
             <Price></Price>
         </Container>
         <Container>
         <Contatc></Contatc>
         <Footer></Footer>
         </Container>
         </>

};
  

export default App;
