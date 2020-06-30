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
        Zenith is a web experience that determines how far you are from the International Space Station. Scroll along a visualization of the distance peppered with facts about space and the ISS until you reach your destination.
      </AboutText>
    </AboutContainer>
  )
}
