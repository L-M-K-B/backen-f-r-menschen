import React from 'react';
import {
  GridStep,
  TestP,
  MainArea,
  ContentContainer,
  Slider,
  stepImage,
} from './steByStepStyle';
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from './sliderStyles.scss';

import HeaderLarge from '../header-footer/HeaderLarge';
import Footer from '../header-footer/Footer';

import IconPieList from '../images/IconPieList.svg';
import IconChef from '../images/IconChef.svg';

export default function StepByStepPage({ history, recipe }) {
  const { detailedDescription } = recipe;
  return (
    <GridStep>
      <HeaderLarge />
      <MainArea>
        <ContentContainer>
          <TestP>Testtext</TestP>
          <AwesomeSlider bullets={true} organicArrows={true}>
            {detailedDescription.map(step => (
              <div data-src={step.image} />
            ))}
          </AwesomeSlider>
        </ContentContainer>
        <Footer
          history={history}
          srcIconPieList={IconPieList}
          srcIconChef={IconChef}
        />
      </MainArea>
    </GridStep>
  );
}
/* <AwesomeSlider>
            {detailedDescription.map(step => (
              <stepImage data-src={step.image} />
            ))}
          </AwesomeSlider> */
