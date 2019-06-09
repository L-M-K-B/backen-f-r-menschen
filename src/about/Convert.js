import React from 'react';
import {
  BoxContainer,
  BoxInnerContainer,
  Headline,
  Arrow,
  HeadlineContainer,
  Grid,
  ContainerLeft,
  ContainerMiddle,
  ContainerRight,
  HeaderElement,
  Element,
} from './aboutStyle';

import ArrowDown from '../images/ArrowDown.svg';
import ArrowUp from '../images/ArrowUp.svg';

export default function Convert({
  onToggleConversionContainer,
  conversionContainer,
}) {
  function getConversionContent() {
    if (conversionContainer === true) {
      return (
        <>
          <p>
            Some recipes do not contain distinct measurable amounts of
            ingerdients. In order to make it easier you find suitable
            conversions here.
          </p>
          <Grid>
            <ContainerLeft>
              <HeaderElement>1 tablespoon</HeaderElement>
              <Element>flour</Element>
              <Element>sugar</Element>
              <Element>corn starch</Element>
              <Element>milk/water</Element>
            </ContainerLeft>
            <ContainerMiddle>
              <HeaderElement>level</HeaderElement>
              <Element>15g</Element>
              <Element>15g</Element>
              <Element>10g</Element>
              <Element>20g</Element>
            </ContainerMiddle>
            <ContainerRight>
              <HeaderElement>heaped</HeaderElement>
              <Element>25g</Element>
              <Element>30g</Element>
              <Element>20g</Element>
              <Element>impossible</Element>
            </ContainerRight>
          </Grid>

          <Grid>
            <ContainerLeft>
              <HeaderElement>1 teaspoon</HeaderElement>
              <Element>baking powder</Element>
              <Element>salt</Element>
            </ContainerLeft>
            <ContainerMiddle>
              <HeaderElement>level</HeaderElement>
              <Element>3g</Element>
              <Element>4g</Element>
            </ContainerMiddle>
          </Grid>
        </>
      );
    }
  }

  return (
    <BoxContainer>
      <BoxInnerContainer>
        <HeadlineContainer
          onClick={() => onToggleConversionContainer(!conversionContainer)}
        >
          <Headline>... conversion of measuring units</Headline>
          {conversionContainer ? (
            <Arrow src={ArrowUp} alt="icon arrow up" />
          ) : (
            <Arrow src={ArrowDown} alt="icon arrow down" />
          )}
        </HeadlineContainer>
        {getConversionContent()}
      </BoxInnerContainer>
    </BoxContainer>
  );
}
