import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import issLogo from './images/iss_logo.png'

//----------- Styling ------------------//
const AboutContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  min-height: 100vh;
  padding-top: 10vh;
  background: linear-gradient(185deg, transparent 80%, #151b42);
  @media (max-width: 768px) {
    padding-top: 6vh;
  }
`
const AboutText = styled.p`
  width: 65%;
  max-width: 600px;
  margin: 20px;
  font-size: 1.3rem;
  font-weight: 300;
  line-height: 1.4;
  a {
    color: white;
    &:hover {
      font-weight: 400;
    }
  }
  @media (max-width: 768px) {
    font-size: 1.1rem;
    order: 1;
  }
`
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-flow: column;
  }
`
const Logo = styled.img`
  width: 20vw;
  min-width: 180px;
  max-width: 300px;
`
//--------------------------------------//

export default function About() {
  return (
    <AboutContainer>
      <Title text='About' />
      <StyledDiv>
        <AboutText>
          At some point, you've probably been directly underneath the ISS.
          But what about all the other times? What about right now?
          Scroll along a visualization of your distance, peppered with facts about the ISS and space history until you reach your destination.
          <br /><br />
          Zenith pulls its data from the <a href='https://wheretheiss.at/' target='_blank' rel='noopener noreferrer'>Where the ISS at API</a> and <a href='https://opencagedata.com/' target='_blank' rel='noopener noreferrer'>OpenCage Geocoder</a>.
          Facts and imagery are from nasa.gov, and the ISS Wikipedia page.
      </AboutText>
        <Logo src={issLogo} />
      </StyledDiv>
    </AboutContainer>
  )
}
