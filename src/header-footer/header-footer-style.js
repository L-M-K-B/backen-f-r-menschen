import styled from 'styled-components';
import { NavLink as RRDNavlinkLink } from 'react-router-dom';
import {
  AppWidthS,
  AppWidthM,
  AppWidthL,
  BoxWidthS,
  BoxWidthM,
  borderRadius,
  pinkBoxShadow,
  navButtonWidth,
  navButtonHeight,
} from '../misc/styleVariables';
import { lightFont, pink, pShadow, white } from '../misc/colors';

// Header
export const HeaderContainer = styled.div`
  grid-row: 1;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 374px) {
    min-width: ${AppWidthS};
  }
  @media (min-width: 375px) and (max-width: 499px) {
    width: ${AppWidthM};
  }
  @media (min-width: 500px) {
    width: ${AppWidthL};
  }
`;
// Position stimmt nicht, nimmt nicht die ganze Breite ein, obwohl es könnte (ist momentan maximal 375px breit -> wo ist diese Begrenzung)
export const Panel = styled.img`
  height: 55px;
  position: absolute;
`;
export const HeadlineContainer = styled.div`
  position: relative;
  z-index: 100;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  border-radius: ${borderRadius};
  box-shadow: ${pinkBoxShadow} ${pShadow};
  background-color: ${white};

  @media (max-width: 374px) {
    width: ${BoxWidthS};
    padding: 5px 5px;
  }
  @media (min-width: 375px) {
    width: ${BoxWidthM};
    padding: 10px 20px;
  }
`;
export const Headline = styled.p`
  font-family: 'Domine', serif;
  font-size: 24px;
  margin: 5px;
`;

//HeaderLarge
export const HeaderContainerLarge = styled.div`
  grid-row: 1;
  position: fixed;
  display: flex;
  justify-content: space-evenly;
  height: 89px;

  @media (max-width: 374px) {
    min-width: ${AppWidthS};
  }
  @media (min-width: 375px) and (max-width: 499px) {
    width: ${AppWidthM};
  }
  @media (min-width: 500px) {
    width: ${AppWidthL};
  }
`;

// Position stimmt nicht, nimmt nicht die ganze Breite ein, obwohl es könnte (ist momentan maximal 375px breit -> wo ist diese Begrenzung)
export const PanelLarge = styled.img`
  height: 89px;
  position: absolute;
`;
export const CurrentContainer = styled.div`
  height: 97px;
  width: 65px;
  margin-top: 12px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: ${borderRadius};
  box-shadow: ${pinkBoxShadow} ${pShadow};
  background-color: ${white};
`;
export const PrevNextContainer = styled.div`
  z-index: 100;
  width: 65px;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${lightFont};
`;
export const NumberPart1 = styled.p`
  margin: 0 5px;
  font-family: 'Domine', serif;
  font-size: 24px;
  text-align: center;
`;
export const NumberPart2 = styled.p`
  margin: 0 8px;
  font-family: 'Domine', serif;
  font-size: 16px;
  text-align: center;
`;

// Footer
export const NavContainer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: top;
  height: 60px;
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    ${white} 50%
  );

  @media (max-width: 374px) {
    min-width: ${AppWidthS};
  }
  @media (min-width: 375px) and (max-width: 499px) {
    width: ${AppWidthM};
  }
  @media (min-width: 500px) {
    width: ${AppWidthL};
  }
`;
export const NavLink = styled(RRDNavlinkLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${navButtonHeight};
  width: ${navButtonWidth};
  border: none;
  border-radius: ${borderRadius};
  box-shadow: ${pinkBoxShadow} ${pShadow};
  background-color: ${white};
  text-decoration: none;
  &.active {
    background-color: ${pink};
  }
`;
export const NavBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${navButtonHeight};
  width: ${navButtonWidth};
  border: none;
  border-radius: ${borderRadius};
  box-shadow: ${pinkBoxShadow} ${pShadow};
  background-color: ${white};
  }
`;
export const IconArrowBack = styled.img`
  height: 20px;
`;
