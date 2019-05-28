import React from 'react'
import { NavContainer, Icon, NavLink } from './header-footer-style'

export default function Footer({ srcIconPieList }) {
  return (
    <NavContainer>
      <NavLink exact to="/">
        <Icon src={srcIconPieList} />
      </NavLink>
    </NavContainer>
  )
}
//  <GradientPanel />
