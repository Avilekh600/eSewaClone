import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function ImgSlider() {

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay : true,
      };

  return (
   <Container>
          <Left>
                <li>Topup & Recharge</li>
                <li>Electricity & water</li>
                <li>TV payment</li>
                <li>Bus Ticket/Tours & Travels</li>
                <li>School and college</li>
                <li>Credit card payment</li>
                <li>Financial Services</li>
                <li>Movies and Entertainment</li>
          </Left>
          <Right>    
          <Carousel {...settings}>
                  <Wrap><img src="./images/slider-a.webp" alt="slider" /></Wrap>
                  <Wrap><img src="./images/slider-b.webp" alt="slider" /></Wrap>
                  <Wrap><img src="./images/slider-c.webp" alt="slider" /></Wrap>
                  <Wrap><img src="./images/slider-d.webp" alt="slider" /></Wrap>
                  <Wrap><img src="./images/slider-e.webp" alt="slider" /></Wrap>
          </Carousel>
          </Right>
   </Container>
  )
}
const Container = styled.div`
      padding : 10px calc(4vw + 10px);
      display : flex;
      gap : 10px;
      
`
const Left = styled.div`
   background : white;
   width : 250px;
   
    li{
        list-style : none;
        line-height : 2;
        padding : 5px 8px;
        cursor : pointer;
        &:hover{
            background : rgba(0,0,0,0.1);
            color : rgba(96, 187, 70,1);
        }
    }
    @media (max-width : 1138px){
        display : none;
    }

`
const Right = styled.div`
 
`
const Carousel = styled(Slider)`
     width : 70vw;
     @media (max-width : 1138px){
       width : 100vw;
    }
     
  
`
const Wrap = styled.div`
     
   img{
    width : 100%;
    height : 100%;
    cursor : pointer;
   }
`