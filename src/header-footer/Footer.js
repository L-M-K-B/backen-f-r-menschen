import React from 'react'
import { NavContainer, Icon, NavLink, DummyButton } from './header-footer-style'

export default function Footer({ srcPieList }) {
  return (
    <NavContainer>
      <NavLink exact to="/">
        <Icon src={srcPieList} />
      </NavLink>
    </NavContainer>
  )
}
