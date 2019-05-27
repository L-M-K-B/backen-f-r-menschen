import React from 'react'
import {
  HeaderContainer,
  Panel,
  HeadlineContainer,
  Headline,
  Filling,
} from './header-footer-style'
import HeaderPanel from '../images/HeaderPanel.png'

export default function Header({ title }) {
  return (
    <HeaderContainer>
      <Panel src={HeaderPanel} />
      <HeadlineContainer>
        <Headline>{title}</Headline>
      </HeadlineContainer>
      <Filling />
    </HeaderContainer>
  )
}
