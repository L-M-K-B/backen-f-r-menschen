import React from 'react';
import {
  HeaderContainerLarge,
  PanelLarge,
  PrevNextContainer,
  CurrentContainer,
  NumberPart1,
  NumberPart2,
} from './header-footer-style';
import HeaderPanelLarge from '../images/HeaderPanelLarge.svg';

export default function HeaderLarge() {
  return (
    <>
      <PanelLarge src={HeaderPanelLarge} />
      <HeaderContainerLarge>
        <PrevNextContainer>
          <NumberPart1>3</NumberPart1>
          <NumberPart2>from 10</NumberPart2>
        </PrevNextContainer>
        <PrevNextContainer>
          <NumberPart1>5</NumberPart1>
          <NumberPart2>from 10</NumberPart2>
        </PrevNextContainer>
      </HeaderContainerLarge>
      <CurrentContainer>
        <NumberPart1>4</NumberPart1>
        <NumberPart2>from 10</NumberPart2>
      </CurrentContainer>
    </>
  );
}
//
