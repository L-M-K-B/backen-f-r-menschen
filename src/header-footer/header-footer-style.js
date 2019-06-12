import styled from 'styled-components';
import { NavLink as RRDNavlinkLink } from 'react-router-dom';
import { lightFont, pink, pShadow, white } from '../misc/colors';

// Header
export const HeaderContainer = styled.div`
  grid-row: 1;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 375px;
`;
export const Panel = styled.img`
  height: 55px;
  width: 375px;
  position: absolute;
`;
export const HeadlineContainer = styled.div`
  position: relative;
  z-index: 100;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  width: 335px;
  border-radius: 14px;
  box-shadow: 0 4px 4px 0 ${pShadow};
  background-color: ${white};
`;
export const Headline = styled.p`
  margin: 10px;
  font-family: 'Domine', serif;
  font-size: 30px;
`;

//HeaderLarge
export const HeaderContainerLarge = styled.div`
  grid-row: 1;
  position: fixed;
  display: flex;
  justify-content: space-evenly;
  height: 89px;
  width: 375px;
  background-color: ${pShadow};
`;
export const PanelLarge = styled.img`
  width: 375px;
  position: absolute;
`;
export const CurrentContainer = styled.div`
  height: 97px;
  width: 65px;
  margin-top: 12px;
  z-index: 100;
  justify-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  box-shadow: 0 4px 4px 0 ${pShadow};
  background-color: ${white};
`;
export const PrevNextContainer = styled.div`
  z-index: 100;
  width: 65px;
  margin: 0 55px;
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
  width: 375px;
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    ${white} 50%
  );
`;
export const NavLink = styled(RRDNavlinkLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 110px;
  border: none;
  border-radius: 14px;
  box-shadow: 0 4px 4px 0 ${pShadow};
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
  height: 50px;
  width: 110px;
  border: none;
  border-radius: 14px;
  box-shadow: 0 4px 4px 0 ${pShadow};
  background-color: ${white};
  }
`;
export const Icon = styled.img``;
export const IconArrowBack = styled.img`
  height: 20px;
`;
