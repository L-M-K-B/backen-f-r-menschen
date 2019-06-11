import React from 'react';
import { GridStyle, MainArea, AboutContainer } from './aboutStyle';

import Header from '../header-footer/Header';
import Project from './Project';
import Convert from './Convert';
import Footer from '../header-footer/Footer';

import IconPieList from '../images/IconPieList.svg';
import IconChefActive from '../images/IconChefActive.svg';

export default function AboutPage({
  history,
  onToggleProjectContainer,
  projectContainer,
  onToggleConversionContainer,
  conversionContainer,
}) {
  return (
    <GridStyle>
      <Header title="About ..." />
      <MainArea>
        <AboutContainer>
          <Project
            onToggleProjectContainer={onToggleProjectContainer}
            projectContainer={projectContainer}
          />
          <Convert
            onToggleConversionContainer={onToggleConversionContainer}
            conversionContainer={conversionContainer}
          />
        </AboutContainer>
      </MainArea>
      <Footer
        history={history}
        srcIconPieList={IconPieList}
        srcIconChef={IconChefActive}
      />
    </GridStyle>
  );
}
