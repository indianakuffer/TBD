import React from 'react'
import styled from 'styled-components'

//----------- Styling ------------------//
const PromptContainer = styled.div`
`
//--------------------------------------//

export default function Prompt(props) {
  // props.issCoordinates.iss_position.longitude

  return (
    <PromptContainer>
      {props.showPrompt ?
        <div>
          <p>The ISS is currently above the {props.issEarthLocation}, {Math.round(props.distance)}km away!</p>
          <p>Scroll up to see just how far away that is...</p>
        </div>
        : null}
    </PromptContainer>
  )
}