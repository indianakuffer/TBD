import React from 'react'
import styled from 'styled-components'
import Title from './Title'

//----------- Styling ------------------//

const AboutContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-flow: column;
  align-items: center;
  padding-top: 10vh;
  background: linear-gradient(185deg, transparent 80%, #151b42);
`

const AboutText = styled.p`
  font-size: 1.3rem;
  font-weight: 300;
  line-height: 1.4;
  width: 65%;
  max-width: 600px;
`

//--------------------------------------//

export default function About() {
  return (
    <AboutContainer>
      <Title text='About' />
      <AboutText>
        At some point, you've probably been directly underneath the ISS, 408km above right on the edge of the exosphere.
        But what about all the other times? What about right now?
        Scroll along a visualization of your distance, peppered with facts about the ISS and space history until you reach your destination.
      </AboutText>
    </AboutContainer>
  )
}
