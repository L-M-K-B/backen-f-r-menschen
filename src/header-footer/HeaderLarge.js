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

export default function HeaderLarge({
  maxNumber,
  prevNumber,
  currentNumber,
  nextNumber,
}) {
  return (
    <>
      <HeaderContainerLarge>
        <PanelLarge src={HeaderPanelLarge} />
        <PrevNextContainer>
          <NumberPart1>{prevNumber}</NumberPart1>
          <NumberPart2>of {maxNumber}</NumberPart2>
        </PrevNextContainer>
        <CurrentContainer>
          <NumberPart1>{currentNumber}</NumberPart1>
          <NumberPart2>of {maxNumber}</NumberPart2>
        </CurrentContainer>
        <PrevNextContainer>
          <NumberPart1>{nextNumber}</NumberPart1>
          <NumberPart2>of {maxNumber}</NumberPart2>
        </PrevNextContainer>
      </HeaderContainerLarge>
    </>
  );
}
//
