import React from 'react';
import {
  HeaderContainer,
  Panel,
  HeadlineContainer,
  Headline,
} from './header-footer-style';
import HeaderPanel from '../images/HeaderPanel.svg';

export default function Header({ title }) {
  return (
    <HeaderContainer>
      <Panel src={HeaderPanel} />
      <HeadlineContainer>
        <Headline>{title}</Headline>
      </HeadlineContainer>
    </HeaderContainer>
  );
}
