import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Prompt from './Prompt'
import FactList from './FactList'

//----------- Styling ------------------//
const HomeContainer = styled.div`
  position: sticky;
  display: flex;
  flex-flow: column;
  align-items: center;
`
const Landing = styled.div`
  display: flex;
  flex-flow: column;
  padding-top: 20vh;
  align-items: center;
  height: 100vh;
`
//--------------------------------------//

const scrollToRef = (ref) => {
  window.scrollTo(0, ref.current.offsetTop)
}

export default function Home(props) {
  let [inputValue, setInputValue] = useState('')
  const myRef = useRef()

  const scrollToLanding = () => {
    scrollToRef(myRef)
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
      <Landing ref={myRef}>
        <h1>Zenith</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="location"></label>
          <input type="text" name='location' onChange={handleInputChange} value={inputValue} />
        </form>
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
