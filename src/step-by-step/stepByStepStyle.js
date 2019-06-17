import styled from 'styled-components';
import { wShadow, borderRadius } from '../common/styleVariables';

export const ContainerArrowExplanation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Explanation = styled.p`
  position: relative;
  top: -20px;
  margin: 0;
  font-size: 20px;
  text-align: center;
`;
export const ArrowBox = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 374px) {
    width: 200px;
  }
  @media (min-width: 375px) {
    width: 335px;
  }
`;
export const ArrowLeftBox = styled.div`
  position: relative;
  z-index: 9;
  height: 45px;
  border-radius: ${borderRadius};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${wShadow};
  @media (max-width: 374px) {
    top: -125px;
    width: 30px;
    margin-left: 3px;
  }
  @media (min-width: 375px) {
    top: -190px;
    width: 45px;
    margin-left: 5px;
  }
`;
export const ArrowRightBox = styled.div`
  position: relative;
  z-index: 9;
  height: 45px;
  border-radius: ${borderRadius};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${wShadow};
  @media (max-width: 374px) {
    top: -125px;
    width: 30px;
    margin-right: 3px;
  }
  @media (min-width: 375px) {
    top: -190px;
    width: 45px;
    margin-right: 5px;
  }
`;
export const IconArrowLeft = styled.img`
  opacity: 0.8;
`;
export const IconArrowRight = styled.img`
  opacity: 0.8;
`;
