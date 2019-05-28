import React from 'react'
import { NavContainer, Icon, NavLink } from './header-footer-style'

export default function Footer({ srcPieList }) {
  return (
    <NavContainer>
      <NavLink exact to="/">
        <Icon src={srcPieList} />
      </NavLink>
    </NavContainer>
  )
}
//  <GradientPanel />
