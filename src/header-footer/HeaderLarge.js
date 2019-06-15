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

export default function HeaderLarge({ maxNo, prevNo, currentNo, nextNo }) {
  return (
    <>
      <HeaderContainerLarge>
        <PanelLarge src={HeaderPanelLarge} />
        <PrevNextContainer>
          <NumberPart1>{prevNo}</NumberPart1>
          <NumberPart2>from {maxNo}</NumberPart2>
        </PrevNextContainer>
        <CurrentContainer>
          <NumberPart1>{currentNo}</NumberPart1>
          <NumberPart2>from {maxNo}</NumberPart2>
        </CurrentContainer>
        <PrevNextContainer>
          <NumberPart1>{nextNo}</NumberPart1>
          <NumberPart2>from {maxNo}</NumberPart2>
        </PrevNextContainer>
      </HeaderContainerLarge>
    </>
  );
}
//
