import React from 'react'
import styled from 'styled-components'
import Topmenu from './Topmenu'
import ImgSlider from './ImgSlider'
import Services from './Services'

export default function Home() { 
  return (
    <Container>
        <Topmenu />
        <ImgSlider />
        <Services  title="Popular Services" />
        <Services  title="Buy Life Insurance" />
        <Services  title="New Services" />
        <Services  title="Government Payment" />
        <Services  title="Utility Bill Payments" />
        <Services  title=" Insurance" />
        <Services  title="Health" />
        <Services  title="Movies" />
        <Services  title="Online Services" />
    </Container>
  )
}

const Container = styled.div`
   padding-top : 70px;
    min-height: calc(100vh - 70px);
    background :  #f5f7fd;
`