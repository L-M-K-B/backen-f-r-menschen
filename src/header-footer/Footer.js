import React from 'react';
import {
  NavContainer,
  Icon,
  NavLink,
  NavBtn,
  IconArrowBack,
} from './header-footer-style';

import ArrowBack from '../images/ArrowBack.svg';

export default function Footer({ history, srcIconPieList, srcIconChef }) {
  function handleClick() {
    history.goBack();
  }

  return (
    <NavContainer>
      <NavBtn
        onClick={() => {
          handleClick();
        }}
      >
        <IconArrowBack src={ArrowBack} />
      </NavBtn>
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
