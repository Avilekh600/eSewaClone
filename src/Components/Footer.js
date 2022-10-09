import React from 'react'
import styled from 'styled-components'

export default function Footer() {
  return (
    <>    
    <Container>
        <TopWrap>
                  <div> <img src="./images/esewa_logo.png" alt="esewa" /></div>
                  <div> <p>POLICY</p>
                        <li>Privacy Policy</li>
                        <li>Information Security Policy</li>
                        <li>Terms and condition</li>
                        <li>Report Fraud/MisuseOf</li>
                        <li>Transaction</li>
                  </div>
                  <div><p>GENERAL</p>
                         <li>Privacy Policy</li>
                        <li>Information Security Policy</li>
                        <li>Terms and condition</li>
                        <li>Report Fraud/MisuseOf</li>
                        <li>Transaction</li>
                        <li>Video Tutorial</li>
                        <li>eSewa</li>

                  </div>
                  <div><p>COMPANY</p>
                        <li>About Us</li>
                        <li>Career</li>
                        <li>Blogs/News</li>
                       
                  </div>
                  <div><p>PARTNER</p>
                         <li>Western Union</li>
                        <li>Banks</li>
                      
                  </div>
                  <div><p>HELP</p>
                          <li>Developer's Guide</li>
                        <li>FAQ's</li>
                        <li>Contact us</li>
                        <button>Become a merchant</button>
                  </div>
        </TopWrap>
        <ButtomWrap>
                     <img src="./images/first.jpg" alt="first" />
                     <img src="./images/playstore.jpg" alt="first" />
                    <Logo> <img src="./images/f1-logo.webp" alt="first" /></Logo>
        </ButtomWrap>

    </Container>
    <Foot>
           <p>© 2009-2022 eSewa. All Rights Reserved.</p>
           <div>
                <p>Keep in touch -</p>
                <i class="fa-brands fa-square-facebook"></i>
                <i class="fa-brands fa-square-twitter"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-linkedin"></i>
           </div>
    </Foot>
    </>
  )
}

const Container = styled.div`
   background : #28323c;
   padding : 20px calc(10vw + 10px);
`

const TopWrap = styled.div`
      display : flex;
      margin-top : 10px;
      color : #8093a2;
     gap : 50px;
     
      align-items : center;
      img{
        margin-right : 50px;
        margin-top : 70px;
      }
      div{
        height : 250px;
        display : flex;
        flex-direction : column;
       
      }
      p{
        font-weight : bold;
        margin : 10px 0;
      }
      li{
        
        list-style : none ;
        margin : 2px 0;
        cursor : pointer;
        &:hover{
            color :rgba(96, 187, 70,1);
        }
      }
      button{
        background-color : rgba(96, 187, 70,1);
        padding : 8px 12px;
        color : white;
        border-radius : 5px;
        margin-top : 20px;
        cursor : pointer;
      }
      @media (max-width : 1138px){
        display : none;
    }

`
const ButtomWrap = styled.div`

    display : flex;
    align-items : center;
   justify-content : space-around;
    img{
        width : 300px;
    }
    @media (max-width : 1138px){
        flex-direction : column;
    }

`
const Logo = styled.div`
          width : 150px;
          img{
            border-radius : 20px;
            background : white;
            width : 100%;
            cursor : pointer;
          }

`

const Foot = styled.div`
           background : #1c252e;
           color : #8093a2;
           padding : 10px;
           display : flex;
           justify-content : space-around;
           div{
            display : flex;
           }
           p{
            @media (max-width : 1138px){
                display : none;
            }
           }
           i{
            cursor : pointer;
            color : white;
            margin : 0 5px;
            &:hover{
                color :rgba(96, 187, 70,1);
            }
           }
`

