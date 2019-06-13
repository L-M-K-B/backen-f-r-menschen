import React, { useState } from 'react';
import {
  GridStep,
  MainArea,
  ContentContainer,
  Explanation,
  ArrowBox,
  ArrowLeftBox,
  ArrowRightBox,
  IconArrowLeft,
  IconArrowRight,
} from './steByStepStyle';
import AwesomeSlider from 'react-awesome-slider';
import './sliderStyles.scss';

import HeaderLarge from '../header-footer/HeaderLarge';
import Footer from '../header-footer/Footer';

import ArrowLeft from '../images/ArrowLeft.svg';
import ArrowRight from '../images/ArrowRight.svg';
import IconPieList from '../images/IconPieList.svg';
import IconChef from '../images/IconChef.svg';

export default function StepByStepPage({ history, recipe }) {
  const [currentStep, setCurrentStep] = useState(1);

  const { detailedDescription } = recipe;

  const prevNo = currentStep <= 1 ? ' - ' : currentStep - 1;
  const maxNo = detailedDescription[detailedDescription.length - 1].number;
  const nextNo = currentStep >= maxNo ? ' - ' : currentStep + 1;

  function handleTransitionStart(event) {
    const currentNo = event.nextIndex + 1;
    setCurrentStep(currentNo);
  }

  function getExplanation() {
    const index = currentStep - 1;
    return detailedDescription[index].explanation;
  }

  return (
    <GridStep>
      <HeaderLarge
        maxNo={maxNo}
        prevNo={prevNo}
        currentNo={currentStep}
        nextNo={nextNo}
      />
      <MainArea>
        <ContentContainer>
          <AwesomeSlider
            bullets={false}
            organicArrows={false}
            onTransitionStart={event => handleTransitionStart(event)}
          >
            {detailedDescription.map(step => (
              <div data-src={step.image} />
            ))}
          </AwesomeSlider>
          <ArrowBox>
            <ArrowLeftBox>
              <IconArrowLeft src={ArrowLeft} />
            </ArrowLeftBox>
            <ArrowRightBox>
              <IconArrowRight src={ArrowRight} />
            </ArrowRightBox>
          </ArrowBox>
          <Explanation>{getExplanation()}</Explanation>
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
