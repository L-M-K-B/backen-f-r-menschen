import React, { useState } from 'react';
import {
  ContainerArrowExplanation,
  Explanation,
  ArrowBox,
  ArrowLeftBox,
  ArrowRightBox,
  IconArrowLeft,
  IconArrowRight,
} from './stepByStepStyle';
import { MainArea, ContentContainer } from '../common/containerStyles';
import { GridHeaderLarge } from '../common/grid';
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

  const prevNumber = currentStep <= 1 ? ' - ' : currentStep - 1;
  const maxNumber = detailedDescription[detailedDescription.length - 1].number;
  const nextNumber = currentStep >= maxNumber ? ' - ' : currentStep + 1;

  function handleTransitionStart(event) {
    const currentNumber = event.nextIndex + 1;
    setCurrentStep(currentNumber);
  }

  function getExplanation() {
    const index = currentStep - 1;
    return detailedDescription[index].explanation;
  }

  return (
    <GridHeaderLarge>
      <HeaderLarge
        maxNumber={maxNumber}
        prevNumber={prevNumber}
        currentNumber={currentStep}
        nextNumber={nextNumber}
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
          <ContainerArrowExplanation>
            <ArrowBox>
              <ArrowLeftBox>
                <IconArrowLeft src={ArrowLeft} />
              </ArrowLeftBox>
              <ArrowRightBox>
                <IconArrowRight src={ArrowRight} />
              </ArrowRightBox>
            </ArrowBox>
            <Explanation>{getExplanation()}</Explanation>
          </ContainerArrowExplanation>
        </ContentContainer>
        <Footer
          history={history}
          srcIconPieList={IconPieList}
          srcIconChef={IconChef}
        />
      </MainArea>
    </GridHeaderLarge>
  );
}
