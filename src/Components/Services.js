import React from 'react'
import styled from 'styled-components'

export default function Services(props) {
  return (
    <Container>
           <Title>
            <h4>{props.title}</h4>
           </Title>
           <Wrap>
               
                <Box>
                      <Top>
                            <ImgWrap>
                            <div>
                            <img src="./images/daraz.webp" alt="daraz" />
                            </div>
                                 
                            </ImgWrap>
                      </Top>
                      <Buttom>
                              <p>Daraz</p>
                              <span>View Details</span>
                      </Buttom>
                </Box>
                <Box>
                      <Top>
                      <ImgWrap>
                            <div>
                            <img src="./images/iphone.webp" alt="daraz" />
                            </div>
                                 
                            </ImgWrap>
                      </Top>
                      <Buttom>
                               <p>Rs 50. ma iphone 13</p>
                              <span>View Details</span>
                      </Buttom>
                </Box>
                <Box>
                      <Top>
                      <ImgWrap>
                            <div>
                            <img src="./images/bachelor.webp" alt="daraz" />
                            </div>
                                 
                            </ImgWrap>
                      </Top>
                      <Buttom>
                               <p>Bachelor's Scholarship</p>
                              <span>View Details</span>
                      </Buttom>
                </Box>
                <Boxn>
                      <Top>
                      <ImgWrap>
                            <div>
                            <img src="./images/cedep.webp" alt="daraz" />
                            </div>
                                 
                            </ImgWrap>
                      </Top>
                      <Buttom>
                              <p>CEDEP Nepal,Putalisadak</p>
                              <span>View Details</span>
                      </Buttom>
                </Boxn>
                <Boxnn>
                      <Top>
                      <ImgWrap>
                            <div>
                            <img src="./images/cg.webp" alt="daraz" />
                            </div>
                                 
                            </ImgWrap>
                      </Top>
                      <Buttom> 
                               <p>CG offer booking</p>
                              <span>View Details</span>

                      </Buttom>
                </Boxnn>
             
           </Wrap>
    </Container>
  )
}
const Container = styled.div`
      padding : 20px calc(4vw + 10px);
      margin : 10px 0;
`
const Title = styled.div`
    margin : 10px 0;
`
const Wrap = styled.div`
       background : white;
       width : 88vw;
       height : auto;
       display : flex;
       padding : 15px 5px;
       gap : 10px;
       justify-content : space-around;
`
const Box = styled.div`
border : 2px solid rgba(0,0,0,0.15);
height : 200px;
width : 200px;
cursor : pointer;
border-radius : 5px;
display : flex;
flex-direction : column;
   &:hover{
    img{
        transform : scale(1.5);
    }
    div{
        border-radius : 6px;
    }
   }
@media (max-width : 1138px){
    height : 120px;
 }
`
const Boxn = styled(Box)`
    @media (max-width : 1138px){
       display : none;
    }
`
const Boxnn = styled(Boxn)`
`

const Top = styled.div`
   flex: 45%;
   background :  #f5f7fd;
   display : flex;
   justify-content : center;
   align-items : center;

`
const Buttom = styled.div`
       background : white;
       flex : 55%;
       text-align : center;
       p{
        margin : 20px 0;
        cursor : pointer;
          &:hover{
            color : rgba(96, 187, 70,1);
         }
         @media (max-width : 1138px){
            font-size : small;
         }
       }
       span{
        color : rgba(96, 187, 70,1);
        transition : all 250ms ease-in;
        padding : 5px 10px;
          &:hover{
            color : white;
            background : rgba(96, 187, 70,1);
            border-radius : 5px;
          }
          @media (max-width : 1138px){
            display : none;
         }
       }
`
const ImgWrap = styled.div`
         width : 65px;
         
         
         
         display : flex;
         justify-content : center;
         align-items : center;
         
         div{
            background : white;
            border-radius : 15px  50px;
            transition : all 250ms ease-out;
            padding : 10px 15px;
            display : flex;
         justify-content : center;
         align-items : center;
         }
        
        img{
            transition : all 250ms ease-out;
            width : 60px;
          
        }
      
`