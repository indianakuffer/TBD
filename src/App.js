import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import Home from './Home'
import About from './About'
import Nav from './Nav'
import distanceToISS from './distance_formulas.js'
import facts from './facts.json'

//----------- Styling ------------------//
const SiteContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
`

const StyledMain = styled.main`
  min-height: 100vh;
  background: black;
  color: white;
`

const NavHamburger = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 100;
  border: 1px solid transparent;
  border-radius: 3px;
`
//--------------------------------------//

function App() {
  let [userLocation, setUserLocation] = useState(null)
  let [issCoordinates, setIssCoordinates] = useState(null)
  let [issEarthLocation, setIssEarthLocation] = useState(null)
  let [distance, setDistance] = useState(null)
  let [showPrompt, setShowPrompt] = useState(false)
  let [showNav, setShowNav] = useState(false)

  useEffect(() => {
    // Get ISS information on load
    getIssCoordinates()
  }, [])

  const getIssCoordinates = async () => {
    try {
      const response = await axios.get('http://api.open-notify.org/iss-now')
      setIssCoordinates(response.data.iss_position)
      getIssEarthLocation(response.data.iss_position.longitude, response.data.iss_position.latitude)
    } catch (error) {
      console.error(error)
    }

  }

  const getIssEarthLocation = async (lon, lat) => {
    const apiKey = process.env.REACT_APP_OCG_API_KEY
    const q = `${lat},${lon}`
    try {
      const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&q=${q}`)
      setIssEarthLocation(response.data.results[0].formatted)
    } catch (error) {
      console.error(error)
    }
  }

  const getUserLocation = async (address) => {
    const apiKey = process.env.REACT_APP_OCG_API_KEY
    try {
      const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&q=${address}`)
      const location = response.data.results[0]
      setUserLocation(location)
      setDistance(distanceToISS(location.geometry.lng, location.geometry.lat, issCoordinates.longitude, issCoordinates.latitude))
      setShowPrompt(true)
    } catch (error) {
      console.error(error)
    }
  }

  const toggleNav = () => {
    setShowNav(!showNav)
  }

  return (
    <SiteContainer>
      {!showNav &&
        <NavHamburger onClick={toggleNav}>
          |||
        </NavHamburger>
      }
      {showNav && <Nav toggleNav={toggleNav} />}
      <StyledMain>
        <Route path='/' exact>
          <Home
            getUserLocation={getUserLocation}
            showPrompt={showPrompt}
            issCoordinates={issCoordinates}
            issEarthLocation={issEarthLocation}
            distance={distance}
            facts={facts}
          />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </StyledMain>
    </SiteContainer>
  );
}

export default App;
