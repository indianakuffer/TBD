import React from 'react'
import styled from 'styled-components'

//----------- Styling ------------------//
const FactListContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`
//--------------------------------------//

export default function FactList(props) {
  return (
    <FactListContainer>
      {props.facts.map(fact => {
        if (fact.distance < props.distance) {
          return <div key={fact.fact}>{fact.fact}</div>
        }
      })}
    </FactListContainer>
  )
}
