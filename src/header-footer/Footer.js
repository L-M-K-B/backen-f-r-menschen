import React from 'react';
import {
  NavContainer,
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
        <img src={srcIconPieList} alt="" />
      </NavLink>
      <NavLink to="/about">
        <img src={srcIconChef} alt="" />
      </NavLink>
    </NavContainer>
  );
}
//  <GradientPanel />
