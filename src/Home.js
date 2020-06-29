import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

//----------- Styling ------------------//
const HomeContainer = styled.div`
  display: flex;
  flex-flow: column;
`

//--------------------------------------//

export default function Home({ getUserLocation }) {
  let [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getUserLocation(inputValue)
    setInputValue('')
  }

  return (
    <HomeContainer>
      <h1>Zenith</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="location"></label>
        <input type="text" name='location' onChange={handleInputChange} value={inputValue} />
      </form>
    </HomeContainer>
  )
}
