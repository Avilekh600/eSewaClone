import React from 'react'
import styled from 'styled-components'

export default function Topmenu() {
  return (
    <Container>
             
                <li>TopUp</li>
                <li>Airline</li>
                <li>Internet Bill</li>
                <li>Load Fund</li>
            
    </Container>
  )
}

const Container = styled.div`
background : rgba(96, 187, 70,1);
height : 40px;
width : 100vw;
padding : 0 calc(4vw + 10px);
 display : flex;
    gap : 20px;
    align-items : center;

  li{
    cursor : pointer;
    color : white;
    list-style : none;
    &:hover{
        color: rgba(255,255,255,0.4);
    }
  }

`
