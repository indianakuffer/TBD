import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Title from './Title'
import Prompt from './Prompt'
import FactList from './FactList'
import Scrollbar from './Scrollbar'

//----------- Styling ------------------//
const HomeContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  background: #023e7d;
`
const Landing = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding-top: 10vh;
  background: linear-gradient(185deg,transparent 70%,#d68e1acf 85%, white);
  @media (max-width: 768px) {
    padding-top: 6vh;
  }
`
const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
`
const StyledInput = styled.input`
  width: 60%;
  max-width: 700px;
  height: 3rem;
  padding: 0 0.7rem;
  border: 1px solid white;
  border-radius: 0.7rem;
  font-size: 1.2rem;
  color: white;
  background: transparent;
  &::placeholder {
    color: white;
    opacity: 0.3;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 3px white;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`
const LandingText = styled.p`
  width: 55%;
  max-width: 600px;
  margin: 1rem 0 3rem 0;
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 1.4;
  @media (max-width: 768px) {
    width: 80%;
  }
`
//--------------------------------------//

export default function Home(props) {
  let [inputValue, setInputValue] = useState('')
  const landingRef = useRef()

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.getUserLocation(inputValue)
    setInputValue('')
  }

  const scrollToLanding = () => {
    window.scrollTo(0, landingRef.current.offsetTop)
  }

  useEffect(scrollToLanding, [props.distance])

  return (
    <HomeContainer >
      {props.distance && <FactList distance={props.distance} facts={props.facts} usDistance={props.usDistance} usStandard={props.usStandard}></FactList>}
      {props.distance && <Scrollbar distance={props.distance} usDistance={props.usDistance} usStandard={props.usStandard} />}
      <Landing ref={landingRef}>
        <Title text='Zenith' />
        <LandingText>
          The International Space Station is a modular spacecraft and science laboratory in low orbit around Earth, large enough to serve as a home for crews of astronauts and cosmonauts.
          It's a multi-national collaborative effort of our world's greatest space agencies.
          <br /><br />
          Traveling at {props.usStandard ? `${(7.6 / 1.609).toFixed(1)} mph` : `7.6 km/s`}, it's able to orbit earth nearly 16 times per day.
          <span style={{ textShadow: '0.01rem 0 white' }}> So where is it now? </span>
          Enter your location below to find out...
        </LandingText>
        <StyledForm onSubmit={handleSubmit}>
          <label htmlFor="location"></label>
          <StyledInput type="text" name='location' onChange={handleInputChange} value={inputValue} placeholder='Where are you?' />
        </StyledForm>
        <Prompt
          showPrompt={props.showPrompt}
          issCoordinates={props.issCoordinates}
          issEarthLocation={props.issEarthLocation}
          distance={props.distance}
          usDistance={props.usDistance}
          usStandard={props.usStandard}
        />
      </Landing >
    </HomeContainer >
  )
}
