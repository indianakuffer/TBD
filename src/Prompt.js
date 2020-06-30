import React from 'react'
import styled from 'styled-components'

//----------- Styling ------------------//
const PromptContainer = styled.div`
  font-size: 1.5rem;  
  font-weight: 300;
  opacity: 0;
  transition: 1s opacity ease;
  max-width: 65%;
`
//--------------------------------------//

export default function Prompt(props) {
  // props.issCoordinates.iss_position.longitude

  return (
    <PromptContainer style={props.showPrompt ? { opacity: "1" } : null}>
      <p>The ISS is currently over {props.issEarthLocation}, {Math.round(props.distance)}km away!</p>
      <p>Let's <span style={{ fontWeight: '400' }}>scroll up</span> to see just how far away that is...</p>
    </PromptContainer>
  )
}