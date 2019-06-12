import React, { useState, useEffect } from 'react';
import { setLocal, getLocal } from '../services';
import {
  GridStep,
  MainArea,
  ContentContainer,
  Explanation,
} from './steByStepStyle';
import AwesomeSlider from 'react-awesome-slider';
import './sliderStyles.scss';

import HeaderLarge from '../header-footer/HeaderLarge';
import Footer from '../header-footer/Footer';

import IconPieList from '../images/IconPieList.svg';
import IconChef from '../images/IconChef.svg';

export default function StepByStepPage({ history, recipe }) {
  const [current, setCurrent] = useState(getLocal('current') || 1);
  useEffect(() => {
    setLocal('current', current);
  }, [current]);

  const { detailedDescription } = recipe;

  const prevNo = current <= 1 ? ' - ' : current - 1;
  const maxNo = detailedDescription[detailedDescription.length - 1].number;
  const nextNo = current >= maxNo ? ' - ' : current + 1;

  function handleTransitionStart(event) {
    const currentNo = event.nextIndex + 1;
    setCurrent(currentNo);
  }

  function getExplanation() {
    const index = current - 1;
    return detailedDescription[index].explanation;
  }

  return (
    <GridStep>
      <HeaderLarge
        maxNo={maxNo}
        prevNo={prevNo}
        currentNo={current}
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
