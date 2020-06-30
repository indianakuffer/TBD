import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Title from './Title'
import Prompt from './Prompt'
import FactList from './FactList'

//----------- Styling ------------------//
const HomeContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  background: #883c24;
`

const Landing = styled.div`
  display: flex;
  flex-flow: column;
  padding-top: 10vh;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: linear-gradient(185deg, transparent 80%, #d68e1a);
`
const StyledForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
`
const StyledInput = styled.input`
  background: transparent;
  color: white;
  border: 1px solid white;
  width: 60%;
  max-width: 700px;
  height: 3rem;
  font-size: 1.2rem;
  border-radius: 0.7rem;
  padding: 0 0.7rem;

  &::placeholder {
    color: white;
    opacity: 0.3;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 3px white;
  }
`
const LandingHeader = styled.h2`
  font-size: 1.3rem;
  margin: 0;
`
const LandingText = styled.p`
  font-size: 1.1rem;
  margin: 1rem 0 3rem 0;
  width: 55%;
  font-weight: 300;
  line-height: 1.4;
`
//--------------------------------------//

export default function Home(props) {
  let [inputValue, setInputValue] = useState('')
  const landingRef = useRef()

  const scrollToLanding = () => {
    window.scrollTo(0, landingRef.current.offsetTop)
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.getUserLocation(inputValue)
    setInputValue('')
  }

  useEffect(scrollToLanding, [props.distance])

  return (
    <HomeContainer >
      {props.distance && <FactList distance={props.distance} facts={props.facts}></FactList>}
      <Landing ref={landingRef}>
        <Title text='Zenith' />
        <LandingHeader>What is the ISS?</LandingHeader>
        <LandingText>
          The International Space Station is a modular spacecraft and science laboratory in low orbit around Earth, large enough to serve as a home for crews of astronauts and cosmonauts.
          It's a multi-national collaborative effort of our world's greatest space agencies.
          <br /><br />
          Travelling at 7.6 km/s, it's able to orbit earth nearly 16 times per day.
          <span style={{ textShadow: '0.01rem 0 white' }}> So where is it now? </span>
          Enter your location below to find out!
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
        />
      </Landing >
    </HomeContainer >
  )
}
