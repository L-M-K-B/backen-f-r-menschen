import styled from 'styled-components';
import { oShadow } from '../misc/colors';

export const MainArea = styled.main`
  grid-row: 2;
  overflow: hidden;
  overflow-y: scroll;
  margin-bottom: 26px;
  padding-bottom: 55px;
`;
export const AboutContainer = styled.div`
  width: 335px;
  margin: 30px 20px 0;
`;
export const BoxContainer = styled.div`
  margin-bottom: 30px;
  padding: 1px 0;
  border-radius: 14px;
  box-shadow: 0 5px 4px 2px ${oShadow};
`;
export const BoxInnerContainer = styled.div`
  border-radius: 14px;
  margin: 8px;
`;
export const Headline = styled.p`
  font-family: 'Domine', serif;
  font-size: 24px;
`;

// Convert
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 40% 30% 30%;
  grid-template-rows: 1fr;
  margin-bottom: 15px;
`;
export const ContainerLeft = styled.div`
  grid-column: 1;
  display: flex;
  flex-direction: column;
`;
export const ContainerMiddle = styled.div`
  grid-column: 2;
  display: flex;
  flex-direction: column;
`;
export const ContainerRight = styled.div`
  grid-column: 3;
  display: flex;
  flex-direction: column;
`;
export const HeaderElement = styled.p`
  margin: 0;
  text-decoration: underline;
`;
export const Element = styled.p`
  margin: 0;
`;
