import styled from 'styled-components'
import { NavLink as RRDNavlinkLink } from 'react-router-dom'
import { pink, pShadow, white } from '../misc/colors'

export const HeaderContainer = styled.div`
  grid-row: 1;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
export const Panel = styled.img`
  align-items: stretch;
  height: 55px;
  position: absolute;
`
export const HeadlineContainer = styled.div`
  position: relative;
  z-index: 100;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  width: 90%;
  border-radius: 14px;
  box-shadow: 0 4px 4px 0 ${pShadow};
  background-color: ${white};
`
export const Headline = styled.p`
  margin: 10px;
  font-family: 'Domine', serif;
  font-size: 30px;
`
export const NavContainer = styled.div`
  grid-row: 3;
  display: flex;
  justify-content: space-evenly;
  align-items: top;
`

export const NavLink = styled(RRDNavlinkLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 110px;
  margin-top: 3px;
  border: none;
  border-radius: 14px;
  box-shadow: 0 4px 4px 0 ${pShadow};
  background-color: ${white};
  text-decoration: none;
  &.active {
    background-color: ${pink};
  }
`
export const Icon = styled.img``
