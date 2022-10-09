import React from 'react'
import styled from 'styled-components'

export default function Header() {
  return (
    <Container>
          <ImgWrap>
            <img src="./images/esewa_logo.png" alt="esewa_logo" />
          </ImgWrap>

          <Input>
                   <i class="fa-solid fa-magnifying-glass"></i>
                  <input type="text" placeholder='Search services/merchant by tags (e.g.ads!)' />
          </Input>
          <RightMenu>
               <Id> 
                   <i class="fa-solid fa-user"></i>
                  <input type="text" placeholder='eSewa ID'/>  
               </Id>
               <Password> 
                  <i class="fa-solid fa-lock"></i>
                  <input type="password" placeholder='Password'/>  
              </Password>
               <Button1>Login</Button1>
               <HamLogin> Login</HamLogin>
               <Button2>Register</Button2>

          </RightMenu>
    </Container>
  )
}

const Container = styled.div`
      height : 70px;
      width : 100vw;
      background : #1c252e;
      padding : 0 calc(4vw + 10px);
      display : flex;
      align-items : center;
      justify-content : space-between;
     
      position : fixed;
      z-index : 10;
      gap : 30px;
`

const ImgWrap = styled.div`
         
          margin-right : 20px;
          img{
            width : 100px;
            
          }
`
const Input = styled.div`
  background : #28323c;
  display : flex;
  align-items : center;
  width : 350px;
  padding : 2px 5px;
  border-radius : 4px;
  transition : all 300ms;
  
  input{
    color : white;
    width : 310px;
    background : none;
    outline : none;
    border : none;
    padding : 8px 0;
    margin-left : 10px;
    &:hover{
       
        color : black;
    }
  }
 
  &:hover{
    background : white;
}
@media (max-width : 1138px){
    display : none;
}

`

const RightMenu = styled.div`
      display : flex;
      gap : 5px;
  
`

const Id = styled.div`
background : #28323c;
width : 200px;
display : flex;
gap : 10px;
align-items : center;
padding : 2px 5px;
border-radius : 4px;
transition : all 300ms;

input{
    color : white;
    width : 280px;
    background : none;
    outline : none;
    border : none;
    padding : 8px 0;
    margin-left : 5px;
    &:hover{
       
        color : black;
    }
  }
  &:hover{
    background : white;
}
@media (max-width : 1138px){
    display : none;
}
`
const Password = styled(Id)`

`

const Button1 = styled.button`
  color : white;
  background : rgba(96, 187, 70,1);
  cursor: none;
  border : none;
  padding : 0 20px;
  @media (max-width : 1138px){
    display : none;
}
`
const Button2 = styled.button`
color : lime;
background : none;
cursor: pointer;
border : 2px solid rgba(96, 187, 70,1);
padding : 0 20px;
transition : all 300ms ease-in;
&:hover{
    background :  rgba(96, 187, 70,1);
    color : white;
}
@media (max-width : 1138px){
    display : none;
}
`
const HamLogin = styled.button`
color : whitesmoke;
background : none;
cursor: pointer;
border : 2px solid whitesmoke;
padding : 2px 20px;
display : none;
@media (max-width : 1138px){
    display : block;
}
`