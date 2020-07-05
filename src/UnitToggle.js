import React from 'react'
import styled from 'styled-components'

//----------- Styling ------------------//
const ToggleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  color: white;
  text-decoration: none;
  padding: 10px;
  @media (max-width: 768px) {
    flex-flow: column;
  }
`
const Switch = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 50%;
  border-radius: 100px;
  height: 20px;
  background-color: #ffffff1c;
  @media (max-width: 768px) {
    width: 80%;
    margin-top: 5px;
  }
`
const Slider = styled.span`
  position: absolute;
  background: white;
  border-radius: 200px;
  width: 15px;
  height: 15px;
  right: ${props => props.usStandard ? 'calc(0% + 7px)' : 'calc(100% - 22px)'};
  transition: 0.3s right ease;
`
//--------------------------------------//
export default function UnitToggle(props) {
  return (
    <ToggleContainer>
      {props.usStandard ? 'US' : 'Metric'}
      <Switch usStandard={props.usStandard} onClick={props.toggleStandard}>
        <Slider usStandard={props.usStandard}>&nbsp;</Slider>
      </Switch>
    </ToggleContainer>
  )
}