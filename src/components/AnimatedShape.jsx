import React from 'react'
import styled, { keyframes } from 'styled-components'

const Square = styled.div`
width: 60px;
height: 60px;
background-color: #0520a8;
opacity: 0.8;
position: absolute;
top : -60px;
left : -60px;
z-index: -1;
animation: square 25s alternate infinite;
@keyframes square {
    to {
        transform:translate(100vw ,100vh);

    }
}
`;

const Circle = styled.div`
width: 100px;
height: 100px;
border-radius: 50%;
background-color: #bd1b3e;
position: absolute;
top : 350px;
left : -100px;
z-index: -1;
animation: circle 25s alternate infinite;
@keyframes circle {
    to {
        transform:translate(100vw , -100vh);

    }
}
`;






export const AnimatedShape = () => {
    return ( <>
        <Square>
            
        </Square>
        <Circle></Circle>
        </>
    )
}
