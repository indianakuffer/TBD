import React, { useState } from 'react'
import styled from 'styled-components'
import Prompt from './Prompt'
import FactList from './FactList'

//----------- Styling ------------------//
const HomeContainer = styled.div`
  position: sticky;
  display: flex;
  flex-flow: column;
  align-items: center;
  transition: 1s height ease;
`
const Landing = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 100vh;
`
//--------------------------------------//

export default function Home(props) {
  let [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.getUserLocation(inputValue)
    setInputValue('')
  }

  return (
    < HomeContainer >
      {props.distance && <FactList distance={props.distance} facts={props.facts}></FactList>}
      <Landing >
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
