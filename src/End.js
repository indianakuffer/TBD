import React from 'react'
import styled from 'styled-components'
import issImage from './images/ISS.png'

//----------- Styling ------------------//
const EndContainer = styled.div`
  position: absolute;
  top: 0;
  height: 102vh;
  width: 100vw;
  padding: 10vh 5% 0 5%;
  padding-top: 10vh;
  z-index: 10;
  font-size: 2rem;
  font-weight: 400;
  background-image: url('${issImage}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
  -webkit-mask-image: linear-gradient(rgba(0,0,0,1) 95%,rgba(0,0,0,0));
  mask-image: linear-gradient(rgba(0,0,0,1) 95%,rgba(0,0,0,0));
  h1 {
    margin-top: 0;
  }
  p {
    font-size: 1.2rem;
    background: rgba(0,0,0,0.8);
    max-width: 60%;
  }
  a {
    color: white;
    &:hover {
      font-weight: 600;
    }
  }
`
//--------------------------------------//

export default function End(props) {
  return (
    <EndContainer>
      <h1>At last</h1>
      <p>You've reached the ISS. The single largest space structure and stepping stone to the cosmos, {props.usStandard ? `${Math.trunc(props.usDistance)} miles` : `${Math.trunc(props.distance)}km`} away.</p>
      <p>Thank you for taking this journey, if you would like to learn more about the ISS check out NASA's <a href='https://www.nasa.gov/mission_pages/station/main/index.html' target='_blank' rel='noopener noreferrer'>mission page</a> or watch this <a href='https://www.youtube.com/watch?v=KlK_bLnqmas' target='_blank' rel='noopener noreferrer'>recent spacewalk footage.</a></p>
    </EndContainer>
  )
}
