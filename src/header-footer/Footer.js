import React from 'react';
import { NavContainer, Icon, NavLink } from './header-footer-style';

export default function Footer({ srcIconPieList, srcIconChef }) {
  return (
    <NavContainer>
      <NavLink exact to="/">
        <Icon src={srcIconPieList} />
      </NavLink>
      <NavLink to="/about">
        <Icon src={srcIconChef} />
      </NavLink>
    </NavContainer>
  );
}
//  <GradientPanel />
