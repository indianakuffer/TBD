import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import Nav from './Nav'
import Home from './Home'
import About from './About'
import distanceToISS from './distance_formulas.js'
import facts from './facts.json'
import menuIcon from './images/menu.svg'

//----------- Styling ------------------//
const SiteContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
`
const StyledMain = styled.main`
  min-height: 100vh;
  background: #050713;
  color: white;
`
const NavHamburger = styled.img`
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 100;
  filter: invert();
  width: 35px;
  opacity: 0.7;
  transition: 0.3s opacity ease;
  &:hover {
    opacity: 1;
  }
`
//--------------------------------------//

export default function App() {
  let [issCoordinates, setIssCoordinates] = useState(null)
  let [issEarthLocation, setIssEarthLocation] = useState(null)
  let [distance, setDistance] = useState(null)
  let [usDistance, setUsDistance] = useState(null)
  let [showPrompt, setShowPrompt] = useState(false)
  let [showNav, setShowNav] = useState(false)
  let [usStandard, setUsStandard] = useState(false)

  useEffect(() => {
    const getIssCoordinates = async () => {
      try {
        const response = await axios.get('https://api.wheretheiss.at/v1/satellites/25544')
        setIssCoordinates(response.data)
        getIssEarthLocation(response.data.longitude, response.data.latitude)
      } catch (error) {
        console.error(error)
      }
    }
    getIssCoordinates()
  }, [])

  const getIssEarthLocation = async (lon, lat) => {
    const apiKey = '777ea9e72f594073a460308bbbe9d2ca'
    const q = `${lat},${lon}`
    try {
      const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&q=${q}`)
      setIssEarthLocation(response.data.results[0].formatted)
    } catch (error) {
      console.error(error)
    }
  }

  const getUserLocation = async (address) => {
    const apiKey = '777ea9e72f594073a460308bbbe9d2ca'
    try {
      const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&q=${address}`)
      const location = response.data.results[0]
      const kmDistance = distanceToISS(location.geometry.lng, location.geometry.lat, issCoordinates.longitude, issCoordinates.latitude)
      setDistance(kmDistance)
      setUsDistance(kmDistance / 1.609)
      setShowPrompt(true)
    } catch (error) {
      console.error(error)
    }
  }

  const toggleNav = () => {
    setShowNav(!showNav)
  }

  const toggleStandard = () => {
    setUsStandard(!usStandard)
  }

  return (
    <SiteContainer>
      {!showNav && <NavHamburger src={menuIcon} onClick={toggleNav} />}
      <Nav showNav={showNav} toggleNav={toggleNav} usStandard={usStandard} toggleStandard={toggleStandard} />
      <StyledMain>
        <Route path='/' exact>
          <Home
            getUserLocation={getUserLocation}
            showPrompt={showPrompt}
            issCoordinates={issCoordinates}
            issEarthLocation={issEarthLocation}
            distance={distance}
            usDistance={usDistance}
            facts={facts}
            usStandard={usStandard}
          />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </StyledMain>
    </SiteContainer>
  );
}