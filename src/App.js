import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import Home from './Home'
import About from './About'
import NavLinks from './NavLinks'
import NavFooter from './NavFooter'
import distanceToISS from './distance_formulas.js'

//----------- Styling ------------------//
const SiteContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
`
const StyledNav = styled.nav`
  border: 1px dashed purple;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  width: 8rem;
`
const StyledMain = styled.main`
  border: 1px dashed red;
  flex-grow: 1;
`
//--------------------------------------//

function App() {
  let [userLocation, setUserLocation] = useState(null)
  let [issLocation, setIssLocation] = useState(null)

  useEffect(() => {
    const getIssLocation = async () => {
      const response = await axios.get('http://api.open-notify.org/iss-now')
      setIssLocation(response.data)
    }
    getIssLocation()
  }, [])

  const getUserLocation = async (address) => {
    const apiKey = process.env.REACT_APP_OCG_API_KEY
    const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&q=${address}`)
    setUserLocation(response.data.results)
  }

  return (
    <SiteContainer>
      <StyledNav>
        <NavLinks />
        <NavFooter />
      </StyledNav>
      <StyledMain>
        <Route path='/' exact>
          <Home getUserLocation={getUserLocation} />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </StyledMain>
    </SiteContainer>
  );
}

export default App;
