import styled from 'styled-components'
import { pShadow, white } from '../misc/colors'

export const HeaderContainer = styled.div`
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
export const Filling = styled.div`
  position: absolute;
  height: 25px;
  width: 100%;
  margin-top: 55px;
  background-color: transparent;
`
