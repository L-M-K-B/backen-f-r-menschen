import React from 'react'
import { NavContainer, Icon, NavLink, DummyButton } from './header-footer-style'

export default function Footer({ srcPieList }) {
  return (
    <NavContainer>
      <NavLink exact to="/">
        <Icon src={srcPieList} />
      </NavLink>
      <DummyButton>2</DummyButton>
      <DummyButton>3</DummyButton>
    </NavContainer>
  )
}
//  <GradientPanel />
