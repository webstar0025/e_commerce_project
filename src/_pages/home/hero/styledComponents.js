import styled from 'styled-components';

import { deviceSize } from '_constants';
import { PrimaryButton } from '_components/button';

export const StyledCarouselIndicatorContainer = styled.div`
  text-align: center;
  position: absolute;
  bottom: 10%;

  @media (min-width: ${deviceSize.tablet}) {
    bottom: 27%;
  }
`;

export const StyledCarouselIndicator = styled.div`
  height: 8px;
  width: 8px;
  background-color: ${({ active }) =>
    active ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.24)'};
  border-radius: 50%;
  display: inline-block;
  margin: 0 4px;
  cursor: pointer;

  &:active {
    background-color: white;
  }
`;

export const LeftArrow = styled.img`
  position: absolute;
  top: 45%;
  left: 2%;
  cursor: pointer;

  @media (min-width: ${deviceSize.tablet}) {
    top: 40%;
    left: 15%;
  }
`;

export const RightArrow = styled.img`
  position: absolute;
  top: 45%;
  right: 2%;
  cursor: pointer;

  @media (min-width: ${deviceSize.tablet}) {
    top: 40%;
    right: 15%;
  }
`;

export const Container = styled.div`
  position: relative;
  height: 50%;
  max-height: 420px;

  @media (min-width: ${deviceSize.tablet}) {
    height: 70%;
    min-height: 800px;
  }
`;

export const StyledCarouselItem = styled.div`
  width: 100%;
  height: 100%;
  min-height: 420px;
  padding: 0 5%;
  align-items: center;
  color: #fff;
  font-size: 4em;
  position: relative;

  @media (min-width: ${deviceSize.tablet}) {
    min-height: 800px;
    padding: 0 20%;
  }
`;

export const EventBackground = styled.div`
  z-index: -2;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  background-image: url(${({ backgroundImage }) => backgroundImage});
`;

export const EventInfo = styled.div`
  width: 100%;
  position: absolute;
  top: 60%;
  z-index: 0;

  @media (min-width: ${deviceSize.tablet}) {
    top: calc(40% - 10px);
    z-index: 0;
  }
`;

export const Artist = styled.div`
  font-weight: 500;
  font-size: 36px;
  line-height: 42px;

  @media (min-width: ${deviceSize.tablet}) {
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
  }
`;

export const BuyTicketBtn = styled.div`
  color: #c4a2fa;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  margin-top: 16px;
  cursor: pointer;

  &:hover {
    color: #8049f3;
  }

  @media (min-width: ${deviceSize.tablet}) {
    display: none;
  }
`;

export const EventLocation = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding: 0;

  @media (min-width: ${deviceSize.tablet}) {
    font-size: 18px;
    line-height: 24px;
    padding: 12px 0;
  }
`;

export const StyledButton = styled(PrimaryButton)`
  line-height: 20px;
  margin-top: 32px;
  display: none;

  @media (min-width: ${deviceSize.tablet}) {
    display: block;
  }
`;
